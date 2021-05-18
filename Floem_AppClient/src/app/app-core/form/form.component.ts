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
  });

  form2 = this._formBuilder.group({
    valid: [true, Validators.required],
  });

  form3 = this._formBuilder.group({
    valid: [true, Validators.required],
    floorOtherComments: [this.quoteModel.floorOtherComments],
  });

  form4 = this._formBuilder.group({
    valid: [true, Validators.required],
  });

  form5 = this._formBuilder.group({
    valid: [true, Validators.required],
    otherItemComments: [this.quoteModel.otherItemComments],
  });

  form6 = this._formBuilder.group({
    amount: ['', Validators.required],
  });

  form7 = this._formBuilder.group({
    amount: ['', Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  private getKeys(): string[] {
    var keys = Object.values(this.unitsDimentions);
    return keys;
  }

  public submit(): void {
    //todo
  }

  public onNext(): void {
    console.log(this.quoteModel.units); //todo: remove later on
    console.log(this.quoteModel.removals); //todo: remove later on
  }

  public setNoneFloor(): void {
    this.quoteModel.floorNone = true;
    this.quoteModel.floorLvt = false;
    this.quoteModel.floorOther = false;
    this.quoteModel.floorTiled = false;
  }

  public setTiledFloor(): void {
    this.quoteModel.floorNone = false;
    this.quoteModel.floorLvt = false;
    this.quoteModel.floorOther = false;
    this.quoteModel.floorTiled = true;
  }

  public setLvtFloor(): void {
    this.quoteModel.floorNone = false;
    this.quoteModel.floorLvt = true;
    this.quoteModel.floorOther = false;
    this.quoteModel.floorTiled = false;
  }

  public setOtherFloor(): void {
    this.quoteModel.floorNone = false;
    this.quoteModel.floorLvt = false;
    this.quoteModel.floorOther = true;
    this.quoteModel.floorTiled = false;
  }

  public setRemovals(): void {
    this.quoteModel.removals = true;
  }

  public setNoRemovals(): void {
    this.quoteModel.removals = false;
  }
}
