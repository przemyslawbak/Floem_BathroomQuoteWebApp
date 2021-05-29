import { UnitModel } from './../_models/unit-items.model';
import { QuoteItems, CeilingPainting } from './../_models/quote-items.model';
import { DimentionUnits } from './../_models/quote-items.model';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
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
  public total: number = 0;
  public otherComment: boolean = false;
  public tiles = [
    {
      type: 'tiles',
      code: '6b22e6fe-8e2e-4109-8909-7451cf68ed96',
      price: 34.12,
    } as UnitModel,
    {
      type: 'tiles',
      code: '6de173e3-b387-4dee-bbe8-846390719e56',
      price: 31.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: '8ddb9d62-d597-4200-899d-2dabd88a43e4',
      price: 17.25,
    } as UnitModel,
    {
      type: 'tiles',
      code: '88a5e4a8-cefa-42f8-adc5-7953df987f66',
      price: 19.95,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b5ff5a23-c9c0-4895-9fef-96dde9eab5b3',
      price: 45.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b7b9476f-b846-49a5-94ca-a60fb76a0d0f',
      price: 47.65,
    } as UnitModel,

    {
      type: 'tiles',
      code: '6b22e6fe-8e2e-4109-8909-7451cf68ed96',
      price: 34.12,
    } as UnitModel,
    {
      type: 'tiles',
      code: '6de173e3-b387-4dee-bbe8-846390719e56',
      price: 31.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: '8ddb9d62-d597-4200-899d-2dabd88a43e4',
      price: 17.25,
    } as UnitModel,
    {
      type: 'tiles',
      code: '88a5e4a8-cefa-42f8-adc5-7953df987f66',
      price: 19.95,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b5ff5a23-c9c0-4895-9fef-96dde9eab5b3',
      price: 45.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b7b9476f-b846-49a5-94ca-a60fb76a0d0f',
      price: 47.65,
    } as UnitModel,

    {
      type: 'tiles',
      code: '6b22e6fe-8e2e-4109-8909-7451cf68ed96',
      price: 34.12,
    } as UnitModel,
    {
      type: 'tiles',
      code: '6de173e3-b387-4dee-bbe8-846390719e56',
      price: 31.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: '8ddb9d62-d597-4200-899d-2dabd88a43e4',
      price: 17.25,
    } as UnitModel,
    {
      type: 'tiles',
      code: '88a5e4a8-cefa-42f8-adc5-7953df987f66',
      price: 19.95,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b5ff5a23-c9c0-4895-9fef-96dde9eab5b3',
      price: 45.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b7b9476f-b846-49a5-94ca-a60fb76a0d0f',
      price: 47.65,
    } as UnitModel,

    {
      type: 'tiles',
      code: '6b22e6fe-8e2e-4109-8909-7451cf68ed96',
      price: 34.12,
    } as UnitModel,
    {
      type: 'tiles',
      code: '6de173e3-b387-4dee-bbe8-846390719e56',
      price: 31.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: '8ddb9d62-d597-4200-899d-2dabd88a43e4',
      price: 17.25,
    } as UnitModel,
    {
      type: 'tiles',
      code: '88a5e4a8-cefa-42f8-adc5-7953df987f66',
      price: 19.95,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b5ff5a23-c9c0-4895-9fef-96dde9eab5b3',
      price: 45.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b7b9476f-b846-49a5-94ca-a60fb76a0d0f',
      price: 47.65,
    } as UnitModel,

    {
      type: 'tiles',
      code: '6b22e6fe-8e2e-4109-8909-7451cf68ed96',
      price: 34.12,
    } as UnitModel,
    {
      type: 'tiles',
      code: '6de173e3-b387-4dee-bbe8-846390719e56',
      price: 31.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: '8ddb9d62-d597-4200-899d-2dabd88a43e4',
      price: 17.25,
    } as UnitModel,
    {
      type: 'tiles',
      code: '88a5e4a8-cefa-42f8-adc5-7953df987f66',
      price: 19.95,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b5ff5a23-c9c0-4895-9fef-96dde9eab5b3',
      price: 45.05,
    } as UnitModel,
    {
      type: 'tiles',
      code: 'b7b9476f-b846-49a5-94ca-a60fb76a0d0f',
      price: 47.65,
    } as UnitModel,
  ];

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    this.setDefaultTiles();
  }
  form0 = this._formBuilder.group({
    valid: [true, Validators.required],
  });
  form1 = this._formBuilder.group({
    widthCm: [
      this.quoteModel.widthCm,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    heightCm: [
      this.quoteModel.heightCm,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    depthCm: [
      this.quoteModel.depthCm,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    widthFt: [
      this.quoteModel.widthFt,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    heightFt: [
      this.quoteModel.heightFt,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    depthFt: [
      this.quoteModel.depthFt,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    widthIn: [
      this.quoteModel.widthIn,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    heightIn: [
      this.quoteModel.heightIn,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    depthIn: [
      this.quoteModel.depthIn,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
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
    wallsOtherComments: [this.quoteModel.wallsOtherComments],
  });

  form5 = this._formBuilder.group({
    valid: [true, Validators.required],
    otherItemComments: [this.quoteModel.otherItemComments],
  });

  form6 = this._formBuilder.group({
    valid: [true, Validators.required],
  });

  form7 = this._formBuilder.group({
    valid: [true, Validators.required],
    socketsQty: [this.quoteModel.socketsQty, Validators.pattern('^[0-9]*$')],
    spotlightsQty: [
      this.quoteModel.spotlightsQty,
      Validators.pattern('^[0-9]*$'),
    ],
  });

  form8 = this._formBuilder.group({
    valid: [true, Validators.required],
  });

  stepperOrientation: Observable<StepperOrientation>;

  private getKeys(): string[] {
    var keys = Object.values(this.unitsDimentions);
    return keys;
  }

  public bookQuoteOnline(): void {
    //todo
  }

  public getQuoteLink(): void {
    //todo
  }

  public printOutQuote(): void {
    //todo
  }

  @ViewChild('stepper')
  stepper!: MatStepper;
  public move(index: number): void {
    this.stepper.selectedIndex = index;
  }

  public verifyOthers() {
    if (
      this.quoteModel.floorOther ||
      this.quoteModel.wallsOther ||
      this.quoteModel.otherItem
    ) {
      this.otherComment = true;
    } else {
      this.otherComment = false;
    }
  }

  public setNoneFloor(): void {
    this.quoteModel.floorNone = true;
    this.quoteModel.floorLvt = false;
    this.quoteModel.floorOther = false;
    this.quoteModel.floorTiled = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setTiledFloor(): void {
    this.quoteModel.floorNone = false;
    this.quoteModel.floorLvt = false;
    this.quoteModel.floorOther = false;
    this.quoteModel.floorTiled = true;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setLvtFloor(): void {
    this.quoteModel.floorNone = false;
    this.quoteModel.floorLvt = true;
    this.quoteModel.floorOther = false;
    this.quoteModel.floorTiled = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setOtherFloor(): void {
    this.quoteModel.floorNone = false;
    this.quoteModel.floorLvt = false;
    this.quoteModel.floorOther = true;
    this.quoteModel.floorTiled = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setRemovals(): void {
    this.quoteModel.removals = true;
    this.calculateTotal();
  }

  public setNoRemovals(): void {
    this.quoteModel.removals = false;
    this.calculateTotal();
  }

  public setNoneWall(): void {
    this.quoteModel.wallsNone = true;
    this.quoteModel.wallsFullHeight = false;
    this.quoteModel.wallsHalfHeight = false;
    this.quoteModel.wallsOther = false;
    this.quoteModel.wallsPlastered = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setFullWall(): void {
    this.quoteModel.wallsNone = false;
    this.quoteModel.wallsFullHeight = true;
    this.quoteModel.wallsHalfHeight = false;
    this.quoteModel.wallsOther = false;
    this.quoteModel.wallsPlastered = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setHalfWall(): void {
    this.quoteModel.wallsNone = false;
    this.quoteModel.wallsFullHeight = false;
    this.quoteModel.wallsHalfHeight = true;
    this.quoteModel.wallsOther = false;
    this.quoteModel.wallsPlastered = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setPlasteredWall(): void {
    this.quoteModel.wallsNone = false;
    this.quoteModel.wallsFullHeight = false;
    this.quoteModel.wallsHalfHeight = false;
    this.quoteModel.wallsOther = false;
    this.quoteModel.wallsPlastered = true;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setOtherWall(): void {
    this.quoteModel.wallsNone = false;
    this.quoteModel.wallsFullHeight = false;
    this.quoteModel.wallsHalfHeight = false;
    this.quoteModel.wallsOther = true;
    this.quoteModel.wallsPlastered = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setWallNotPaintedWhite(): void {
    this.quoteModel.wallsPaintedWhite = false;
    this.calculateTotal();
  }

  public setWallPaintedWhite(): void {
    this.quoteModel.wallsPaintedWhite = true;
    this.calculateTotal();
  }

  public onUnitsValChange(e: Array<string>): void {
    if (e.includes('other')) {
      this.quoteModel.otherItem = true;
    } else {
      this.quoteModel.otherItem = false;
    }
    if (e.includes('bath')) {
      this.quoteModel.bathItem = true;
    } else {
      this.quoteModel.bathItem = false;
    }
    if (e.includes('ensuite')) {
      this.quoteModel.ensuiteItem = true;
    } else {
      this.quoteModel.ensuiteItem = false;
    }
    if (e.includes('mixer')) {
      this.quoteModel.mixerItem = true;
    } else {
      this.quoteModel.mixerItem = false;
    }
    if (e.includes('toilet')) {
      this.quoteModel.toiletItem = true;
    } else {
      this.quoteModel.toiletItem = false;
    }
    if (e.includes('rail')) {
      this.quoteModel.towelRailItem = true;
    } else {
      this.quoteModel.towelRailItem = false;
    }
    if (e.includes('basin')) {
      this.quoteModel.basinItem = true;
    } else {
      this.quoteModel.basinItem = false;
    }
    this.verifyOthers();
  }

  public onElectricalValChange(e: Array<string>): void {
    if (e.includes('mirror')) {
      this.quoteModel.mirrorElectrical = true;
    } else {
      this.quoteModel.mirrorElectrical = false;
    }
    if (e.includes('fan')) {
      this.quoteModel.fanElectrical = true;
    } else {
      this.quoteModel.fanElectrical = false;
    }
    if (e.includes('spotlight')) {
      this.quoteModel.spotlightsElectrical = true;
    } else {
      this.quoteModel.spotlightsElectrical = false;
    }
    if (e.includes('switchIn')) {
      this.quoteModel.switcherInsideElectrical = true;
    } else {
      this.quoteModel.switcherInsideElectrical = false;
    }
    if (e.includes('switchOut')) {
      this.quoteModel.switcherOutsideElectrical = true;
    } else {
      this.quoteModel.switcherOutsideElectrical = false;
    }
    if (e.includes('socket')) {
      this.quoteModel.socketsElectrical = true;
    } else {
      this.quoteModel.socketsElectrical = false;
    }
  }

  public setNoChangingDoors(): void {
    this.quoteModel.doorsChanging = false;
    this.calculateTotal();
  }

  public setChangingDoors(): void {
    this.quoteModel.doorsChanging = true;
    this.calculateTotal();
  }

  public getMixerUnitItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getToiletUnitItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getBasinUnitItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getRailUnitItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getEnsuiteUnitItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getBathUnitItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getTiledWallItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getLvtFloorItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getMirrorElecricalItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getDoorItems(): UnitModel[] {
    return this.getTilesFloorItems(); //todo: update
  }

  public getTilesFloorItems(): UnitModel[] {
    return this.tiles;
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

  public scrollToIndex(event: any): void {
    let id = 'step' + event.selectedIndex;
    this.scroll(id);
  }

  public calculateTotal(): void {
    this.total = 0;
    this.quoteModel.removalsTotal = 0;
    this.quoteModel.floorTotal = 0;
    this.quoteModel.wallsTotal = 0;
    this.quoteModel.itemsTotal = 0;
    this.quoteModel.doorsTotal = 0;
    this.quoteModel.electricalTotal = 0;
    this.quoteModel.ceilingTotal = 0;
    if (this.quoteModel.units == 'Imperial') {
      this.convertUnits(true);
    }
    let floorSquareMeters: number =
      (this.quoteModel.widthCm * this.quoteModel.depthCm) / 10000;
    let wallsSquareMeters: number =
      (this.quoteModel.heightCm * this.quoteModel.widthCm * 2) / 10000 +
      (this.quoteModel.heightCm * this.quoteModel.depthCm * 2) / 10000;
    let lvtSquareMeters: number = Math.ceil(floorSquareMeters);
    if (lvtSquareMeters % 2 != 0) {
      lvtSquareMeters = lvtSquareMeters + 1;
    }

    //2.removals
    if (this.quoteModel.removals) {
      this.quoteModel.removalsTotal =
        this.quoteModel.removalsTotal + this.quoteModel.removalsPrice;
    }
    this.total = this.total + this.quoteModel.removalsTotal;
    //3.floor
    if (this.quoteModel.floorNone) {
      this.quoteModel.floorTotal = this.quoteModel.floorTotal;
    } else if (this.quoteModel.floorLvt) {
      this.quoteModel.floorTotal =
        this.quoteModel.floorTotal +
        (lvtSquareMeters / 2) * this.quoteModel.floorLvtPrice +
        lvtSquareMeters * this.quoteModel.floorPrice;
    } else if (this.quoteModel.floorTiled) {
      this.quoteModel.floorTotal =
        this.quoteModel.floorTotal +
        this.quoteModel.floorTilingPrice * floorSquareMeters +
        this.quoteModel.floorPrice * floorSquareMeters;
    }
    this.total = this.total + this.quoteModel.floorTotal;
    //4.wall
    if (this.quoteModel.wallsFullHeight) {
      this.quoteModel.wallsTotal =
        this.quoteModel.wallsTotal +
        wallsSquareMeters * this.quoteModel.wallTilingPrice +
        wallsSquareMeters * this.quoteModel.wallPrice;
    } else if (this.quoteModel.wallsHalfHeight) {
      this.quoteModel.wallsTotal =
        this.quoteModel.wallsTotal +
        (wallsSquareMeters * this.quoteModel.wallTilingPrice +
          wallsSquareMeters * this.quoteModel.wallPrice) /
          2 +
        this.quoteModel.wallPlasteringHalfPrice;
      if (this.quoteModel.wallsPaintedWhite) {
        this.quoteModel.wallsTotal =
          this.quoteModel.wallsTotal + this.quoteModel.wallPaintingWhitePrice;
      }
    } else if (this.quoteModel.wallsPlastered) {
      this.quoteModel.wallsTotal =
        this.quoteModel.wallsTotal + this.quoteModel.wallPlasteringAll;

      if (this.quoteModel.wallsPaintedWhite) {
        this.quoteModel.wallsTotal =
          this.quoteModel.wallsTotal + this.quoteModel.wallPaintingWhitePrice;
      }
    }
    this.total = this.total + this.quoteModel.wallsTotal;
    //5.units
    if (this.quoteModel.basinItem) {
      this.quoteModel.itemsTotal =
        this.quoteModel.itemsTotal +
        this.quoteModel.unitInstallation +
        this.quoteModel.basinPrice;
    }
    if (this.quoteModel.ensuiteItem) {
      this.quoteModel.itemsTotal =
        this.quoteModel.itemsTotal +
        this.quoteModel.unitInstallation +
        this.quoteModel.ensuitePrice;
    }
    if (this.quoteModel.toiletItem) {
      this.quoteModel.itemsTotal =
        this.quoteModel.itemsTotal +
        this.quoteModel.unitInstallation +
        this.quoteModel.toiletPrice;
    }
    if (this.quoteModel.mixerItem) {
      this.quoteModel.itemsTotal =
        this.quoteModel.itemsTotal +
        this.quoteModel.unitInstallation +
        this.quoteModel.mixerPrice;
    }
    if (this.quoteModel.bathItem) {
      this.quoteModel.itemsTotal =
        this.quoteModel.itemsTotal +
        this.quoteModel.unitInstallation +
        this.quoteModel.bathPrice;
    }
    if (this.quoteModel.towelRailItem) {
      this.quoteModel.itemsTotal =
        this.quoteModel.itemsTotal +
        this.quoteModel.unitInstallation +
        this.quoteModel.railPrice;
    }
    this.total = this.total + this.quoteModel.itemsTotal;
    //6.doors
    if (this.quoteModel.doorsChanging) {
      this.quoteModel.doorsTotal =
        this.quoteModel.doorsTotal +
        this.quoteModel.doorChangingPrice +
        this.quoteModel.doorsPrice;
    }
    this.total = this.total + this.quoteModel.doorsTotal;
    //7.electrical
    if (this.quoteModel.spotlightsElectrical) {
      this.quoteModel.electricalTotal =
        this.quoteModel.electricalTotal +
        this.quoteModel.spotlightPrice * this.quoteModel.spotlightsQty;
    }
    if (this.quoteModel.switcherInsideElectrical) {
      this.quoteModel.electricalTotal =
        this.quoteModel.electricalTotal + this.quoteModel.switcherInsidePrice;
    }
    if (this.quoteModel.switcherOutsideElectrical) {
      this.quoteModel.electricalTotal =
        this.quoteModel.electricalTotal + this.quoteModel.switcherOutsidePrice;
    }
    if (this.quoteModel.socketsElectrical) {
      this.quoteModel.electricalTotal =
        this.quoteModel.electricalTotal +
        this.quoteModel.socketsQty * this.quoteModel.socketPrice;
    }
    if (this.quoteModel.mirrorElectrical) {
      this.quoteModel.electricalTotal =
        this.quoteModel.electricalTotal +
        this.quoteModel.mirrorInstallationPrice +
        this.quoteModel.mirrorPrice;
    }
    if (this.quoteModel.fanElectrical) {
      this.quoteModel.electricalTotal =
        this.quoteModel.electricalTotal + this.quoteModel.fanPrice;
    }
    this.total = this.total + this.quoteModel.electricalTotal;
    //8.ceiling
    if (this.quoteModel.paintingCeiling == CeilingPainting.No) {
      this.quoteModel.ceilingTotal = this.quoteModel.ceilingTotal;
    } else if (this.quoteModel.paintingCeiling == CeilingPainting.Paint) {
      this.quoteModel.ceilingTotal =
        this.quoteModel.ceilingTotal + this.quoteModel.ceilingPriceWhite;
    } else if (this.quoteModel.paintingCeiling == CeilingPainting.Plastered) {
      this.quoteModel.ceilingTotal =
        this.quoteModel.ceilingTotal + this.quoteModel.ceilingPricePlastered;
    }
    this.total = this.total + this.quoteModel.ceilingTotal;
  }

  public setYesCeilingPainting(): void {
    this.quoteModel.paintingCeiling = CeilingPainting.Paint;
    this.calculateTotal();
  }

  public setNoCeilingPainting(): void {
    this.quoteModel.paintingCeiling = CeilingPainting.No;
    this.calculateTotal();
  }

  public setYesCeilingPlastered(): void {
    this.quoteModel.paintingCeiling = CeilingPainting.Plastered;
    this.calculateTotal();
  }

  public setDefaultTiles(): void {
    //tiles
    this.setTileSelected(this.tiles, this.quoteModel.floorCode);
    //lvt
    //wall
    //bath
    //ensuite
    //mixer
    //toilet
    //rail
    //basin
    //doors
    //mirror
  }

  private setTileSelected(arr: UnitModel[], code: string): void {
    if (code == '') {
      this.setTile(arr[0], 0);
      return;
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].code == code) {
          this.setTile(arr[i], i);
          return;
        }
      }

      this.setTile(arr[0], 0);
      return;
    }
  }

  private resetArraySelection(arr: UnitModel[]): void {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].selected == true) {
        arr[i].selected = false;
        return;
      }
    }
  }

  public setTile(tile: UnitModel, index: number): void {
    //tiles
    if (tile.type == 'tiles') {
      this.quoteModel.floorPrice = tile.price;
      this.quoteModel.floorType = tile.type;
      this.quoteModel.floorCode = tile.code;
      this.calculateTotal();
      this.resetArraySelection(this.tiles);
      this.tiles[index].selected = true;
    }

    //lvt
    //wall
    //bath
    //ensuite
    //mixer
    //toilet
    //rail
    //basin
    //doors
    //mirror
  }

  public convertUnits(calc: boolean): void {
    if (this.quoteModel.units == DimentionUnits.Inches) {
      this.quoteModel.heightIn = this.getInches(this.quoteModel.heightCm);
      this.quoteModel.widthIn = this.getInches(this.quoteModel.widthCm);
      this.quoteModel.depthIn = this.getInches(this.quoteModel.depthCm);
      this.quoteModel.heightFt = this.getFeet(this.quoteModel.heightCm);
      this.quoteModel.widthFt = this.getFeet(this.quoteModel.widthCm);
      this.quoteModel.depthFt = this.getFeet(this.quoteModel.depthCm);
      console.log(this.quoteModel.heightIn);
      console.log(this.quoteModel.widthIn);
      console.log(this.quoteModel.depthIn);
      console.log(this.quoteModel.heightFt);
      console.log(this.quoteModel.widthFt);
      console.log(this.quoteModel.depthFt);
    } else if (this.quoteModel.units == DimentionUnits.Centimeters || calc) {
      this.quoteModel.heightCm = this.getCentimeters(
        this.quoteModel.heightIn,
        this.quoteModel.heightFt
      );
      this.quoteModel.widthCm = this.getCentimeters(
        this.quoteModel.widthIn,
        this.quoteModel.widthFt
      );
      this.quoteModel.depthCm = this.getCentimeters(
        this.quoteModel.depthIn,
        this.quoteModel.depthFt
      );
      console.log(this.quoteModel.heightCm);
      console.log(this.quoteModel.widthCm);
      console.log(this.quoteModel.depthCm);
    }
  }
  private getCentimeters(i: number, f: number): number {
    return Math.ceil(f * 30.48 + i * 2.54);
  }

  private getFeet(n: number): number {
    let realFeet = (n * 0.3937) / 12;
    return Math.floor(realFeet);
  }

  private getInches(n: number): number {
    let realFeet = (n * 0.3937) / 12;
    let feet = Math.floor(realFeet);
    let inches = (realFeet - feet) * 12;
    return parseFloat(inches.toFixed(4));
  }

  public reloadPage(): void {
    location.reload();
  }
}
