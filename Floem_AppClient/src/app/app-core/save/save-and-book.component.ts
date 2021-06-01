import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '@services/http.service';
import { QuoteService } from '@services/quote.service';

@Component({
  templateUrl: './save-and-book.component.html',
  styleUrls: ['./save.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SaveAndBookComponent implements OnInit {
  public form: FormGroup;
  public minDate: Date = new Date();
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
    private router: Router
  ) {}

  public ngOnInit() {
    this.createForm();
    this.scroll('logo');
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
      Phone: [''], //todo: phone validation
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
    const email = this.form.value.Email;
    console.log(this.form.value.PrivacyAccept);
    alert('will send an email to you and the client');
  }

  public saveAndShare(): void {
    this.router.navigate(['save-and-share']);
  }

  public onCancel(): void {
    this.router.navigate(['']);
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
