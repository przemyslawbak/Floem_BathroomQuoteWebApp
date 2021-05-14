import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  isLinear = true;

  form1 = this._formBuilder.group({
    name: ['', Validators.required],
  });

  form2 = this._formBuilder.group({
    amount: ['', Validators.required],
  });

  form3 = this._formBuilder.group({
    amount: ['', Validators.required],
  });

  form4 = this._formBuilder.group({
    amount: ['', Validators.required],
  });

  form5 = this._formBuilder.group({
    amount: ['', Validators.required],
  });

  form6 = this._formBuilder.group({
    amount: ['', Validators.required],
  });

  form7 = this._formBuilder.group({
    amount: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  submit() {
    //todo
  }
}
