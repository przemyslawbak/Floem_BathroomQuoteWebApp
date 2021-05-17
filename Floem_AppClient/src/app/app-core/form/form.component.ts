import { QuoteItems } from './../_models/quote-items.model';
import { DimentionUnits } from './../_models/quote-items.model';
import { Component, OnInit } from '@angular/core';
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
  unitsDimentions = DimentionUnits;
  keys: Array<string> = this.getKeys();
  public isLinear: boolean = true;
  public quoteModel: QuoteItems = new QuoteItems();

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  form1 = this._formBuilder.group({
    width: [this.quoteModel.width, Validators.required],
    height: [this.quoteModel.height, Validators.required],
    depth: [this.quoteModel.depth, Validators.required],
    units: [this.quoteModel.units, Validators.required],
    //todo: units
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

  private getKeys(): string[] {
    var keys = Object.keys(this.unitsDimentions);
    return keys;
  }

  public submit(): void {
    //todo
  }

  public onNext(): void {
    console.log(this.quoteModel.units);
  }
}
