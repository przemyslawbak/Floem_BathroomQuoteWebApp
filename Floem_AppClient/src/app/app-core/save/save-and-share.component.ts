import { EmailLinkModel } from './../_models/email-link.model';
import { QuoteService } from './../_services/quote.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '@services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteItems } from '@models/quote-items.model';
import { environment } from '@environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalService } from '@services/modal.service';

@Component({
  templateUrl: './save-and-share.component.html',
  styleUrls: ['./save.component.css'],
})
export class SaveAndShareComponent implements OnInit {
  public form: FormGroup;
  public quoteLink: string = '';

  constructor(
    private http: HttpService,
    private quotes: QuoteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private modals: ModalService
  ) {
    if (this.quotes.quoteId == '') {
      this.saveQuoteAndGetId(this.quotes.quoteState);
    } else {
      this.quoteLink = environment.clientUrl + '/form/' + this.quotes.quoteId;
      this.putQuote(this.quotes.quoteState);
    }
  }

  public ngOnInit() {
    this.createForm();
    this.scroll('logo');
  }

  private putQuote(quoteState: QuoteItems): void {
    quoteState.id = this.quotes.quoteId;
    this.spinner.show();
    this.http.updateQuote(quoteState).subscribe(() => {
      this.spinner.hide();
    });
  }

  private saveQuoteAndGetId(quoteState: QuoteItems): void {
    this.spinner.show();
    this.http.postSaveQuote(quoteState).subscribe((res: string) => {
      this.quotes.quoteId = res;
      this.quoteLink = environment.clientUrl + '/form/' + res;
      this.spinner.hide();
    });
  }

  private createForm() {
    this.form = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  public hasError(name: string) {
    const e = this.getFormControl(name);
    return e && (e.dirty || e.touched) && !e.valid;
  }

  private getFormControl(name: string) {
    return this.form.get(name);
  }

  public onSubmit() {
    let model: EmailLinkModel = {} as EmailLinkModel;
    model.email = this.form.value.Email;
    model.link = this.quoteLink;
    this.sendLinkByEmail(model);
  }

  private sendLinkByEmail(model: EmailLinkModel) {
    this.spinner.show();
    this.http.postEmailLink(model).subscribe(() => {
      this.spinner.hide();
    });
  }

  public saveAndBook(): void {
    this.router.navigate(['save-and-book']);
  }

  public onCancel(): void {
    this.router.navigate(['']);
  }

  public onCopyLink(): void {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', this.quoteLink);
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.modals.open('info-modal', 'Copied link to the clipboard');
  }

  public onShareTwitter(): void {
    this.socialWindow(this.quoteLink, 'Twitter');
  }

  public onShareFacebook(): void {
    this.socialWindow(this.quoteLink, 'Facebook');
  }

  private socialWindow(quoteLink: string, social: string): void {
    let url: string = '';
    if (social == 'Twitter') {
      url =
        'https://twitter.com/intent/tweet?text=Floem Renovations bathroom quote: ' +
        quoteLink;
    }

    if (social == 'Facebook') {
      url = 'https://www.facebook.com/sharer.php?u=' + quoteLink;
    }
    var left = (screen.width - 570) / 2;
    var top = (screen.height - 570) / 2;
    var params =
      'menubar=no,toolbar=no,status=no,width=570,height=570,top=' +
      top +
      ',left=' +
      left;
    window.open(url, 'Share link', params);
  }

  public scroll(id: string): void {
    setTimeout(function () {
      let el: HTMLElement = document.getElementById(id)!;
      if (el.offsetHeight > 0) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }, 400);
  }
}
