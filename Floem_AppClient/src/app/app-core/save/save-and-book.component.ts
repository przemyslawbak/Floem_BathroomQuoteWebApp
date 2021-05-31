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

  constructor(
    private http: HttpService,
    private quotes: QuoteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  public ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Name: ['', [Validators.required]],
      DateTime: ['', [Validators.required]],
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
}
