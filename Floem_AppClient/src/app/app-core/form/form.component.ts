import { HttpService } from '@services/http.service';
import { UnitModel } from './../_models/unit-items.model';
import { CeilingPainting, QuoteItems } from './../_models/quote-items.model';
import { DimentionUnits } from './../_models/quote-items.model';
import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '@services/quote.service';
import { UnitsService } from '@services/units.service';
import { ModalService } from '@services/modal.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AdminService } from '@services/admin.service';
import { AdminModel } from '@models/admin.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements AfterViewInit, OnInit {
  unitsDimentions = DimentionUnits;
  keys: Array<string> = this.getKeys();
  public isLinear: boolean = true;
  public total: number = 0;
  public otherComment: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    public breakpointObserver: BreakpointObserver,
    private router: Router,
    public quotes: QuoteService,
    private units: UnitsService,
    private modals: ModalService,
    private route: ActivatedRoute,
    private http: HttpService,
    private spinner: NgxSpinnerService,
    private admin: AdminService
  ) {
    this.getAdminModel().subscribe((res) => {
      if (res) {
        this.admin.adminModel = res;
      } else {
        //??
      }
    });
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  public getAdminModel(): Observable<AdminModel> {
    this.spinner.show();
    let subject = new Subject<AdminModel>();
    this.http.getAdminModel().subscribe({
      next: (a) => {
        subject.next(a);
      },
      error: (e) => {
        subject.next(null);
      },
      complete: () => {
        this.spinner.hide();
      },
    });

    return subject.asObservable();
  }

  public ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.quotes.quoteId = id;
      this.loadQuoteState(id).subscribe((res) => {
        if (res) {
          this.quotes.quoteState = res;
          this.calculateTotal();
        } else {
          //??
        }
        this.setDefaultTiles(); //todo dry
      });
    } else {
      this.setDefaultTiles(); //todo dry
    }
  }

  public ngAfterViewInit(): void {
    if (this.quotes.quoteId != '') {
      this.move(9);
      this.scroll('summary');
    }
  }

  public tiles: UnitModel[] = this.units.getFloorTiles();

  form0 = this._formBuilder.group({
    valid: [true, Validators.required],
  });
  form1 = this._formBuilder.group({
    widthCm: [
      this.quotes.quoteState.widthCm,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    heightCm: [
      this.quotes.quoteState.heightCm,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    depthCm: [
      this.quotes.quoteState.depthCm,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    widthFt: [
      this.quotes.quoteState.widthFt,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    heightFt: [
      this.quotes.quoteState.heightFt,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    depthFt: [
      this.quotes.quoteState.depthFt,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    widthIn: [
      this.quotes.quoteState.widthIn,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    heightIn: [
      this.quotes.quoteState.heightIn,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    depthIn: [
      this.quotes.quoteState.depthIn,
      [Validators.required, Validators.pattern('^[1-9]\\d*(\\.\\d+)?$')],
    ],
    units: [this.quotes.quoteState.units, Validators.required],
  });

  form2 = this._formBuilder.group({
    valid: [true, Validators.required],
  });

  form3 = this._formBuilder.group({
    valid: [true, Validators.required],
    floorOtherComments: [this.quotes.quoteState.floorOtherComments],
  });

  form4 = this._formBuilder.group({
    valid: [true, Validators.required],
    wallsOtherComments: [this.quotes.quoteState.wallsOtherComments],
  });

  form5 = this._formBuilder.group({
    valid: [true, Validators.required],
    otherItemComments: [this.quotes.quoteState.otherItemComments],
  });

  form6 = this._formBuilder.group({
    valid: [true, Validators.required],
  });

  form7 = this._formBuilder.group({
    valid: [true, Validators.required],
    socketsQty: [
      this.quotes.quoteState.socketsQty,
      Validators.pattern('^[0-9]*$'),
    ],
    spotlightsQty: [
      this.quotes.quoteState.spotlightsQty,
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

  @ViewChild('stepper')
  stepper!: MatStepper;
  public move(index: number): void {
    this.stepper.selectedIndex = index;
  }

  private loadQuoteState(id: string): Observable<QuoteItems> {
    this.spinner.show();
    let subject = new Subject<QuoteItems>();
    this.http.getQuote(id).subscribe({
      next: (q) => {
        subject.next(q);
        this.modals.open('info-modal', 'Previous quote successfuly loaded.');
      },
      error: (e) => {
        subject.next(null);
        this.modals.open('info-modal', 'Could not load previous quote. ' + e);
      },
      complete: () => {
        this.spinner.hide();
      },
    });

    return subject.asObservable();
  }

  public verifyOthers() {
    if (
      this.quotes.quoteState.floorOther ||
      this.quotes.quoteState.wallsOther ||
      this.quotes.quoteState.otherItem
    ) {
      this.otherComment = true;
    } else {
      this.otherComment = false;
    }
  }

  public setNoneFloor(): void {
    this.quotes.quoteState.floorNone = true;
    this.quotes.quoteState.floorLvt = false;
    this.quotes.quoteState.floorOther = false;
    this.quotes.quoteState.floorTiled = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setTiledFloor(): void {
    this.quotes.quoteState.floorNone = false;
    this.quotes.quoteState.floorLvt = false;
    this.quotes.quoteState.floorOther = false;
    this.quotes.quoteState.floorTiled = true;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setLvtFloor(): void {
    this.quotes.quoteState.floorNone = false;
    this.quotes.quoteState.floorLvt = true;
    this.quotes.quoteState.floorOther = false;
    this.quotes.quoteState.floorTiled = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setOtherFloor(): void {
    this.quotes.quoteState.floorNone = false;
    this.quotes.quoteState.floorLvt = false;
    this.quotes.quoteState.floorOther = true;
    this.quotes.quoteState.floorTiled = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setRemovals(): void {
    this.quotes.quoteState.removals = true;
    this.calculateTotal();
  }

  public setNoRemovals(): void {
    this.quotes.quoteState.removals = false;
    this.calculateTotal();
  }

  public setNoneWall(): void {
    this.quotes.quoteState.wallsNone = true;
    this.quotes.quoteState.wallsFullHeight = false;
    this.quotes.quoteState.wallsHalfHeight = false;
    this.quotes.quoteState.wallsOther = false;
    this.quotes.quoteState.wallsPlastered = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setFullWall(): void {
    this.quotes.quoteState.wallsNone = false;
    this.quotes.quoteState.wallsFullHeight = true;
    this.quotes.quoteState.wallsHalfHeight = false;
    this.quotes.quoteState.wallsOther = false;
    this.quotes.quoteState.wallsPlastered = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setHalfWall(): void {
    this.quotes.quoteState.wallsNone = false;
    this.quotes.quoteState.wallsFullHeight = false;
    this.quotes.quoteState.wallsHalfHeight = true;
    this.quotes.quoteState.wallsOther = false;
    this.quotes.quoteState.wallsPlastered = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setPlasteredWall(): void {
    this.quotes.quoteState.wallsNone = false;
    this.quotes.quoteState.wallsFullHeight = false;
    this.quotes.quoteState.wallsHalfHeight = false;
    this.quotes.quoteState.wallsOther = false;
    this.quotes.quoteState.wallsPlastered = true;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setOtherWall(): void {
    this.quotes.quoteState.wallsNone = false;
    this.quotes.quoteState.wallsFullHeight = false;
    this.quotes.quoteState.wallsHalfHeight = false;
    this.quotes.quoteState.wallsOther = true;
    this.quotes.quoteState.wallsPlastered = false;
    this.verifyOthers();
    this.calculateTotal();
  }

  public setWallNotPaintedWhite(): void {
    this.quotes.quoteState.wallsPaintedWhite = false;
    this.calculateTotal();
  }

  public setWallPaintedWhite(): void {
    this.quotes.quoteState.wallsPaintedWhite = true;
    this.calculateTotal();
  }

  public onUnitsValChange(e: Array<string>): void {
    if (e.includes('other')) {
      this.quotes.quoteState.otherItem = true;
    } else {
      this.quotes.quoteState.otherItem = false;
    }
    if (e.includes('bath')) {
      this.quotes.quoteState.bathItem = true;
    } else {
      this.quotes.quoteState.bathItem = false;
    }
    if (e.includes('ensuite')) {
      this.quotes.quoteState.ensuiteItem = true;
    } else {
      this.quotes.quoteState.ensuiteItem = false;
    }
    if (e.includes('mixer')) {
      this.quotes.quoteState.mixerItem = true;
    } else {
      this.quotes.quoteState.mixerItem = false;
    }
    if (e.includes('toilet')) {
      this.quotes.quoteState.toiletItem = true;
    } else {
      this.quotes.quoteState.toiletItem = false;
    }
    if (e.includes('rail')) {
      this.quotes.quoteState.towelRailItem = true;
    } else {
      this.quotes.quoteState.towelRailItem = false;
    }
    if (e.includes('basin')) {
      this.quotes.quoteState.basinItem = true;
    } else {
      this.quotes.quoteState.basinItem = false;
    }
    this.verifyOthers();
  }

  public onElectricalValChange(e: Array<string>): void {
    if (e.includes('mirror')) {
      this.quotes.quoteState.mirrorElectrical = true;
    } else {
      this.quotes.quoteState.mirrorElectrical = false;
    }
    if (e.includes('fan')) {
      this.quotes.quoteState.fanElectrical = true;
    } else {
      this.quotes.quoteState.fanElectrical = false;
    }
    if (e.includes('spotlight')) {
      this.quotes.quoteState.spotlightsElectrical = true;
    } else {
      this.quotes.quoteState.spotlightsElectrical = false;
    }
    if (e.includes('switchIn')) {
      this.quotes.quoteState.switcherInsideElectrical = true;
    } else {
      this.quotes.quoteState.switcherInsideElectrical = false;
    }
    if (e.includes('switchOut')) {
      this.quotes.quoteState.switcherOutsideElectrical = true;
    } else {
      this.quotes.quoteState.switcherOutsideElectrical = false;
    }
    if (e.includes('socket')) {
      this.quotes.quoteState.socketsElectrical = true;
    } else {
      this.quotes.quoteState.socketsElectrical = false;
    }
  }

  public setNoChangingDoors(): void {
    this.quotes.quoteState.doorsChanging = false;
    this.calculateTotal();
  }

  public setChangingDoors(): void {
    this.quotes.quoteState.doorsChanging = true;
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

  public scrollToIndex(event: any): void {
    let id = 'step' + event.selectedIndex;
    if (event.selectedIndex == 9) {
      id = 'summary';
    }
    this.scroll(id);
  }

  public calculateTotal(): void {
    this.total = 0;
    this.quotes.quoteState.removalsTotal = 0;
    this.quotes.quoteState.floorTotal = 0;
    this.quotes.quoteState.wallsTotal = 0;
    this.quotes.quoteState.itemsTotal = 0;
    this.quotes.quoteState.doorsTotal = 0;
    this.quotes.quoteState.electricalTotal = 0;
    this.quotes.quoteState.ceilingTotal = 0;
    if (this.quotes.quoteState.units == 'Imperial') {
      this.convertUnits(true);
    }
    let floorSquareMeters: number =
      (this.quotes.quoteState.widthCm * this.quotes.quoteState.depthCm) / 10000;
    let wallsSquareMeters: number =
      (this.quotes.quoteState.heightCm * this.quotes.quoteState.widthCm * 2) /
        10000 +
      (this.quotes.quoteState.heightCm * this.quotes.quoteState.depthCm * 2) /
        10000;
    let lvtSquareMeters: number = Math.ceil(floorSquareMeters);
    if (lvtSquareMeters % 2 != 0) {
      lvtSquareMeters = lvtSquareMeters + 1;
    }

    //2.removals
    if (this.quotes.quoteState.removals) {
      this.quotes.quoteState.removalsTotal = this.admin.adminModel.removalsPrice;
    }
    this.total = this.total + this.quotes.quoteState.removalsTotal;
    //3.floor
    if (this.quotes.quoteState.floorNone) {
      this.quotes.quoteState.floorTotal = this.quotes.quoteState.floorTotal;
    } else if (this.quotes.quoteState.floorLvt) {
      this.quotes.quoteState.floorTotal =
        this.quotes.quoteState.floorTotal +
        (lvtSquareMeters / 2) * this.admin.adminModel.floorLvtPrice +
        lvtSquareMeters * this.quotes.quoteState.floorPrice;
    } else if (this.quotes.quoteState.floorTiled) {
      this.quotes.quoteState.floorTotal =
        this.quotes.quoteState.floorTotal +
        this.admin.adminModel.floorTilingPrice * floorSquareMeters +
        this.quotes.quoteState.floorPrice * floorSquareMeters;
    }
    this.total = this.total + this.quotes.quoteState.floorTotal;
    //4.wall
    if (this.quotes.quoteState.wallsFullHeight) {
      this.quotes.quoteState.wallsTotal =
        this.quotes.quoteState.wallsTotal +
        wallsSquareMeters * this.admin.adminModel.wallTilingPrice +
        wallsSquareMeters * this.quotes.quoteState.wallPrice;
    } else if (this.quotes.quoteState.wallsHalfHeight) {
      this.quotes.quoteState.wallsTotal =
        this.quotes.quoteState.wallsTotal +
        (wallsSquareMeters * this.admin.adminModel.wallTilingPrice +
          wallsSquareMeters * this.quotes.quoteState.wallPrice) /
          2 +
        this.admin.adminModel.wallPlasteringHalfPrice;
      if (this.quotes.quoteState.wallsPaintedWhite) {
        this.quotes.quoteState.wallsTotal =
          this.quotes.quoteState.wallsTotal +
          this.admin.adminModel.wallPaintingWhitePrice;
      }
    } else if (this.quotes.quoteState.wallsPlastered) {
      this.quotes.quoteState.wallsTotal =
        this.quotes.quoteState.wallsTotal +
        this.admin.adminModel.wallPlasteringAll;

      if (this.quotes.quoteState.wallsPaintedWhite) {
        this.quotes.quoteState.wallsTotal =
          this.quotes.quoteState.wallsTotal +
          this.admin.adminModel.wallPaintingWhitePrice;
      }
    }
    this.total = this.total + this.quotes.quoteState.wallsTotal;
    //5.units
    if (this.quotes.quoteState.basinItem) {
      this.quotes.quoteState.itemsTotal =
        this.quotes.quoteState.itemsTotal +
        this.admin.adminModel.unitInstallation +
        this.quotes.quoteState.basinPrice;
    }
    if (this.quotes.quoteState.ensuiteItem) {
      this.quotes.quoteState.itemsTotal =
        this.quotes.quoteState.itemsTotal +
        this.admin.adminModel.unitInstallation +
        this.quotes.quoteState.ensuitePrice;
    }
    if (this.quotes.quoteState.toiletItem) {
      this.quotes.quoteState.itemsTotal =
        this.quotes.quoteState.itemsTotal +
        this.admin.adminModel.unitInstallation +
        this.quotes.quoteState.toiletPrice;
    }
    if (this.quotes.quoteState.mixerItem) {
      this.quotes.quoteState.itemsTotal =
        this.quotes.quoteState.itemsTotal +
        this.admin.adminModel.unitInstallation +
        this.quotes.quoteState.mixerPrice;
    }
    if (this.quotes.quoteState.bathItem) {
      this.quotes.quoteState.itemsTotal =
        this.quotes.quoteState.itemsTotal +
        this.admin.adminModel.unitInstallation +
        this.quotes.quoteState.bathPrice;
    }
    if (this.quotes.quoteState.towelRailItem) {
      this.quotes.quoteState.itemsTotal =
        this.quotes.quoteState.itemsTotal +
        this.admin.adminModel.unitInstallation +
        this.quotes.quoteState.railPrice;
    }
    this.total = this.total + this.quotes.quoteState.itemsTotal;
    //6.doors
    if (this.quotes.quoteState.doorsChanging) {
      this.quotes.quoteState.doorsTotal =
        this.quotes.quoteState.doorsTotal +
        this.admin.adminModel.doorChangingPrice +
        this.quotes.quoteState.doorsPrice;
    }
    this.total = this.total + this.quotes.quoteState.doorsTotal;
    //7.electrical
    if (this.quotes.quoteState.spotlightsElectrical) {
      this.quotes.quoteState.electricalTotal =
        this.quotes.quoteState.electricalTotal +
        this.admin.adminModel.spotlightPrice *
          this.quotes.quoteState.spotlightsQty;
    }
    if (this.quotes.quoteState.switcherInsideElectrical) {
      this.quotes.quoteState.electricalTotal =
        this.quotes.quoteState.electricalTotal +
        this.admin.adminModel.switcherInsidePrice;
    }
    if (this.quotes.quoteState.switcherOutsideElectrical) {
      this.quotes.quoteState.electricalTotal =
        this.quotes.quoteState.electricalTotal +
        this.admin.adminModel.switcherOutsidePrice;
    }
    if (this.quotes.quoteState.socketsElectrical) {
      this.quotes.quoteState.electricalTotal =
        this.quotes.quoteState.electricalTotal +
        this.quotes.quoteState.socketsQty * this.admin.adminModel.socketPrice;
    }
    if (this.quotes.quoteState.mirrorElectrical) {
      this.quotes.quoteState.electricalTotal =
        this.quotes.quoteState.electricalTotal +
        this.admin.adminModel.mirrorInstallationPrice +
        this.quotes.quoteState.mirrorPrice;
    }
    if (this.quotes.quoteState.fanElectrical) {
      this.quotes.quoteState.electricalTotal =
        this.quotes.quoteState.electricalTotal + this.admin.adminModel.fanPrice;
    }
    this.total = this.total + this.quotes.quoteState.electricalTotal;
    //8.ceiling
    if (this.quotes.quoteState.paintingCeiling == CeilingPainting.No) {
      this.quotes.quoteState.ceilingTotal = this.quotes.quoteState.ceilingTotal;
    } else if (
      this.quotes.quoteState.paintingCeiling == CeilingPainting.Paint
    ) {
      this.quotes.quoteState.ceilingTotal =
        this.quotes.quoteState.ceilingTotal +
        this.admin.adminModel.ceilingPriceWhite;
    } else if (
      this.quotes.quoteState.paintingCeiling == CeilingPainting.Plastered
    ) {
      this.quotes.quoteState.ceilingTotal =
        this.quotes.quoteState.ceilingTotal +
        this.admin.adminModel.ceilingPricePlastered;
    }
    this.total = this.total + this.quotes.quoteState.ceilingTotal;
  }

  public setYesCeilingPainting(): void {
    this.quotes.quoteState.paintingCeiling = CeilingPainting.Paint;
    this.calculateTotal();
  }

  public setNoCeilingPainting(): void {
    this.quotes.quoteState.paintingCeiling = CeilingPainting.No;
    this.calculateTotal();
  }

  public setYesCeilingPlastered(): void {
    this.quotes.quoteState.paintingCeiling = CeilingPainting.Plastered;
    this.calculateTotal();
  }

  public setDefaultTiles(): void {
    //tiles
    this.setTileSelected(this.tiles, this.quotes.quoteState.floorCode);
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
      this.quotes.quoteState.floorPrice = tile.price;
      this.quotes.quoteState.floorType = tile.type;
      this.quotes.quoteState.floorCode = tile.code;
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
    if (this.quotes.quoteState.units == DimentionUnits.Inches) {
      this.quotes.quoteState.heightIn = this.getInches(
        this.quotes.quoteState.heightCm
      );
      this.quotes.quoteState.widthIn = this.getInches(
        this.quotes.quoteState.widthCm
      );
      this.quotes.quoteState.depthIn = this.getInches(
        this.quotes.quoteState.depthCm
      );
      this.quotes.quoteState.heightFt = this.getFeet(
        this.quotes.quoteState.heightCm
      );
      this.quotes.quoteState.widthFt = this.getFeet(
        this.quotes.quoteState.widthCm
      );
      this.quotes.quoteState.depthFt = this.getFeet(
        this.quotes.quoteState.depthCm
      );
    } else if (
      this.quotes.quoteState.units == DimentionUnits.Centimeters ||
      calc
    ) {
      this.quotes.quoteState.heightCm = this.getCentimeters(
        this.quotes.quoteState.heightIn,
        this.quotes.quoteState.heightFt
      );
      this.quotes.quoteState.widthCm = this.getCentimeters(
        this.quotes.quoteState.widthIn,
        this.quotes.quoteState.widthFt
      );
      this.quotes.quoteState.depthCm = this.getCentimeters(
        this.quotes.quoteState.depthIn,
        this.quotes.quoteState.depthFt
      );
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

  public saveAndBook(): void {
    if (!this.quotes.verifyQuoteChanges(this.quotes.quoteState)) {
      this.modals.open('info-modal', 'You did not select any services!');
    } else {
      this.router.navigate(['save-and-book']);
    }
  }

  public saveAndShare(): void {
    if (!this.quotes.verifyQuoteChanges(this.quotes.quoteState)) {
      this.modals.open('info-modal', 'You did not select any services!');
    } else {
      this.router.navigate(['save-and-share']);
    }
  }
}
