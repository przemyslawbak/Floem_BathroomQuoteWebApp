import { QuoteItems } from './../_models/quote-items.model';
import { DimentionUnits } from './../_models/quote-items.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UnitModel } from '../_models/unit-items.model';

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
    width: [
      this.quoteModel.width,
      [Validators.required, Validators.pattern('^[0-9]*$')],
    ],
    height: [
      this.quoteModel.height,
      [Validators.required, Validators.pattern('^[0-9]*$')],
    ],
    depth: [
      this.quoteModel.depth,
      [Validators.required, Validators.pattern('^[0-9]*$')],
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
    wallOtherComments: [this.quoteModel.wallsOtherComments],
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

  public submit(): void {
    //todo
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

  public setNoneWall(): void {
    this.quoteModel.wallsNone = true;
    this.quoteModel.wallsFullHeight = false;
    this.quoteModel.wallsHalfHeight = false;
    this.quoteModel.wallsOther = false;
    this.quoteModel.wallsPlastered = false;
  }

  public setFullWall(): void {
    this.quoteModel.wallsNone = false;
    this.quoteModel.wallsFullHeight = true;
    this.quoteModel.wallsHalfHeight = false;
    this.quoteModel.wallsOther = false;
    this.quoteModel.wallsPlastered = false;
  }

  public setHalfWall(): void {
    this.quoteModel.wallsNone = false;
    this.quoteModel.wallsFullHeight = false;
    this.quoteModel.wallsHalfHeight = true;
    this.quoteModel.wallsOther = false;
    this.quoteModel.wallsPlastered = false;
  }

  public setPlasteredWall(): void {
    this.quoteModel.wallsNone = false;
    this.quoteModel.wallsFullHeight = false;
    this.quoteModel.wallsHalfHeight = false;
    this.quoteModel.wallsOther = false;
    this.quoteModel.wallsPlastered = true;
  }

  public setOtherWall(): void {
    this.quoteModel.wallsNone = false;
    this.quoteModel.wallsFullHeight = false;
    this.quoteModel.wallsHalfHeight = false;
    this.quoteModel.wallsOther = true;
    this.quoteModel.wallsPlastered = false;
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
    if (e.includes('switch')) {
      this.quoteModel.switcherElectrical = true;
    } else {
      this.quoteModel.switcherElectrical = false;
    }
    if (e.includes('socket')) {
      this.quoteModel.socketsElectrical = true;
    } else {
      this.quoteModel.socketsElectrical = false;
    }
  }

  public setNoChangingDoors(): void {
    this.quoteModel.doorsChanging = false;
  }

  public setChangingDoors(): void {
    this.quoteModel.doorsChanging = true;
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
          block: 'start',
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
    this.total = this.total + 100;
  }

  public setYesCeilingPainting(): void {
    this.quoteModel.paintingCeiling = true;
  }

  public setNoCeilingPainting(): void {
    this.quoteModel.paintingCeiling = false;
  }

  public setDefaultTiles(): void {
    //todo: if tile codes not selected, set defaults
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
    if (tile.type == 'tiles') {
      this.quoteModel.floorPrice = tile.price;
      this.quoteModel.floorType = tile.code;
      this.quoteModel.floorCode = tile.type;
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
}
