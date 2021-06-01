import { QuoteService } from './../_services/quote.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '@services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteItems } from '@models/quote-items.model';

@Component({
  templateUrl: './save-and-share.component.html',
  styleUrls: ['./save.component.css'],
})
export class SaveAndShareComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private http: HttpService,
    private quotes: QuoteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    if (this.quotes.quoteId == '') {
      quotes.quoteId = this.saveQuoteAndGetId(this.quotes.quoteState);
    } else {
      //todo: put quote
    }
  }

  public ngOnInit() {
    this.createForm();
    this.scroll('logo');
  }

  private saveQuoteAndGetId(quoteState: QuoteItems): string {
    let id: string = '';
    this.http.postSaveQuote(quoteState).subscribe((res: string) => {
      id = res;
    });
    return id;
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
    const email = this.form.value.Email;
    alert('will send an email');
  }

  public saveAndBook(): void {
    this.router.navigate(['save-and-book']);
  }

  public onCancel(): void {
    this.router.navigate(['']);
  }

  public onPrint(): void {
    alert('will open printing window');
  }

  public onShareTwitter(): void {
    alert('will redirect to the Twitter');
  }

  public onShareFacebook(): void {
    alert('will redirect to the Facebook');
  }

  public getTest(): void {
    this.http.getTest('666').subscribe(async (text: string) => {
      alert('response:' + text);
    });
  }

  public postTest(): void {
    this.http.postSaveQuote(this.quotes.quoteState).subscribe(() => {
      //todo
    });
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
