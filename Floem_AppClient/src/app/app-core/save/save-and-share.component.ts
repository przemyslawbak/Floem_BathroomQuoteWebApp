import { QuoteService } from './../_services/quote.service';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '@services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './save-and-share.component.html',
  styleUrls: ['./save-and-share.component.css'],
})
export class SaveAndShareComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private http: HttpService,
    private quotes: QuoteService,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit() {
    this.createForm();
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

  public bookQuoteOnline(): void {
    this.http.getTest('666').subscribe(async (text: string) => {
      alert('response:' + text);
    });
  }

  public getQuoteLink(): void {
    this.http.postSaveQuote(this.quotes.quoteState).subscribe(() => {
      //todo
    });
  }

  public onSubmit() {
    const email = this.form.value.Email;
    //todo: send via http
  }
}
