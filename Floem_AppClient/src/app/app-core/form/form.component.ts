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
  constructor(private _formBuilder: FormBuilder) {}

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    amount: ['', Validators.required],
    stock: ['', Validators.required],
  });

  submit() {
    console.log(this.firstFormGroup.value);

    console.log(this.secondFormGroup.value);
  }
}
