import { ClientModel } from './../_models/quote-client.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '@services/http.service';
import { QuoteService } from '@services/quote.service';
import { QuoteItems } from '@models/quote-items.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '@environments/environment';
import { ModalService } from '@services/modal.service';

@Component({
  templateUrl: './save-and-book.component.html',
  styleUrls: ['./save.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SaveAndBookComponent implements OnInit {
  public form: FormGroup;
  public minDate: Date = new Date();
  public quoteLink: string = '';
  public timeOptions: string[] = [
    '11:00 am',
    '11:30 am',
    '12:00 pm',
    '12:30 pm',
    '1:00 pm',
    '1:30 pm',
    '2:00 pm',
    '2:30 pm',
    '3:00 pm',
    '3:30 pm',
    '4:00 pm',
    '4:30 pm',
    '5:00 pm',
    '5:30 pm',
    '6:00 pm',
    '6:30 pm',
  ];

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
      this.quoteLink = environment.clientUrl + this.quotes.quoteId;
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
    this.http.putQuote(quoteState).subscribe(() => {
      this.spinner.hide();
    });
  }

  private saveQuoteAndGetId(quoteState: QuoteItems): void {
    this.spinner.show();
    this.http.postSaveQuote(quoteState).subscribe((res: string) => {
      this.quotes.quoteId = res;
      this.quoteLink = environment.clientUrl + res;
      this.spinner.hide();
    });
  }

  public weekendsDatesFilter(d: Date): boolean {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  }

  private createForm() {
    this.form = this.formBuilder.group({
      Date: ['', [Validators.required]],
      Time: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Name: ['', [Validators.required]],
      Phone: [''], //todo: phone validation?
      Street: ['', [Validators.required]],
      AptNo: [''],
      City: ['', [Validators.required]],
      State: [''],
      Message: [''],
      PrivacyAccept: [false, [Validators.requiredTrue]],
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
    let client: ClientModel = {} as ClientModel;
    client.email = this.form.value.Email;
    client.date = this.form.value.Date;
    client.time = this.form.value.Time;
    client.name = this.form.value.Name;
    client.phoneNumber = this.form.value.Phone;
    client.street = this.form.value.Street;
    client.aptNo = this.form.value.AptNo;
    client.city = this.form.value.City;
    client.state = this.form.value.State;
    client.message = this.form.value.Message;
    client.quoteLink = this.quoteLink;

    this.saveBookingClient(client);
  }

  public saveBookingClient(client: ClientModel): void {
    this.spinner.show();
    this.http.postClient(client).subscribe(() => {
      this.spinner.hide();
      this.modals.open(
        'info-modal',
        'The reservation request has been sent. You now will receive a confirmation e-mail with a link to the quote. We will contact you soon.'
      );
    });
  }

  public saveAndShare(): void {
    this.router.navigate(['save-and-share']);
  }

  public onCancel(): void {
    this.router.navigate(['']);
  }

  //todo: dry
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
