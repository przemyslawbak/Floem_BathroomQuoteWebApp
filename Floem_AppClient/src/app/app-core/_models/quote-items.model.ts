export enum DimentionUnits {
  Inches = 'Imperial',
  Centimeters = 'Metric',
}
export enum CeilingPainting {
  No = 'NoPainting',
  Paint = 'PaintingWhite',
  Plastered = 'Plastered',
}

export class QuoteItems {
  //1 dimemtions
  widthCm: number;
  heightCm: number;
  depthCm: number;
  widthIn: number;
  heightIn: number;
  depthIn: number;
  widthFt: number;
  heightFt: number;
  depthFt: number;
  units: DimentionUnits;
  //2 removal
  removals: boolean;
  removalsPrice: number;
  removalsTotal: number;
  //3 floor
  floorLvt: boolean;
  floorTiled: boolean;
  floorOther: boolean;
  floorNone: boolean;
  floorCode: string;
  floorType: string;
  floorPrice: number;
  floorTilingPrice: number;
  floorLvtPrice: number;
  floorOtherComments: string;
  floorTotal: number;
  //4 wall
  wallsFullHeight: boolean;
  wallsHalfHeight: boolean;
  wallsPlastered: boolean;
  wallsPaintedWhite: boolean;
  wallsOther: boolean;
  wallsNone: boolean;
  wallsCode: string;
  wallsType: string;
  wallPrice: number;
  wallTilingPrice: number;
  wallPlasteringHalfPrice: number;
  wallPaintingWhitePrice: number;
  wallPlasteringAll: number;
  wallPaintingWhite: number;
  wallsOtherComments: string;
  wallsTotal: number;
  //5 units
  unitInstallation: number;
  bathItem: boolean;
  bathPrice: number;
  ensuiteItem: boolean;
  ensuitePrice: number;
  mixerItem: boolean;
  mixerPrice: number;
  toiletItem: boolean;
  toiletPrice: number;
  towelRailItem: boolean;
  railPrice: number;
  basinItem: boolean;
  basinPrice: number;
  otherItem: boolean;
  otherItemComments: string;
  itemsTotal: number;
  //6 doors
  doorsChanging: boolean;
  doorsType: string;
  doorChangingPrice: number;
  doorsPrice: number;
  doorsTotal: number;
  //7 electrical
  mirrorElectrical: boolean;
  mirrorInstallationPrice: number;
  mirrorPrice: number;
  fanElectrical: boolean;
  fanPrice: number;
  spotlightsElectrical: boolean;
  spotlightPrice: number;
  switcherInsideElectrical: boolean;
  switcherOutsideElectrical: boolean;
  switcherOutsidePrice: number;
  switcherInsidePrice: number;
  socketsElectrical: boolean;
  socketPrice: number;
  socketsQty: number;
  spotlightsQty: number;
  electricalTotal: number;
  //8 ceiling
  paintingCeiling: CeilingPainting;
  ceilingPriceWhite: number;
  ceilingPricePlastered: number;
  ceilingTotal: number;

  constructor() {
    //total
    this.ceilingTotal = 0;
    this.electricalTotal = 0;
    this.doorsTotal = 0;
    this.itemsTotal = 0;
    this.wallsTotal = 0;
    this.floorTotal = 0;
    this.removalsTotal = 0;
    //1
    this.widthCm = 100;
    this.heightCm = 200;
    this.depthCm = 100;
    this.widthFt = 3;
    this.widthIn = 3.37;
    this.heightFt = 6;
    this.heightIn = 6.74;
    this.depthFt = 3;
    this.depthIn = 3.37;
    this.units = DimentionUnits.Centimeters;
    //2
    this.removalsPrice = 300; //per job
    this.removals = false; //
    //3
    this.floorLvtPrice = 150; //per 2m2 //
    this.floorTilingPrice = 60; //per m2 //
    this.floorPrice = 0; //
    this.floorLvt = false;
    this.floorOther = false;
    this.floorNone = true;
    this.floorTiled = false;
    this.floorOtherComments = '';
    this.floorCode = '';
    this.floorType = '';
    //4
    this.wallPrice = 0; //
    this.wallTilingPrice = 45; //
    this.wallPlasteringHalfPrice = 200; //
    this.wallPaintingWhitePrice = 150; //
    this.wallPlasteringAll = 350; //
    this.wallPaintingWhite = 150;
    this.wallsFullHeight = false;
    this.wallsHalfHeight = false;
    this.wallsOther = false;
    this.wallsNone = true;
    this.wallsPlastered = false;
    this.wallsPaintedWhite = false;
    this.wallsOtherComments = '';
    this.wallsCode = '';
    this.wallsType = '';
    //5
    this.unitInstallation = 150; //
    this.ensuitePrice = 0; //
    this.toiletPrice = 0; //
    this.mixerPrice = 0; //
    this.basinPrice = 0; //
    this.bathPrice = 0; //
    this.railPrice = 0; //
    this.bathItem = false;
    this.basinItem = false;
    this.otherItem = false;
    this.ensuiteItem = false;
    this.mixerItem = false;
    this.toiletItem = false;
    this.towelRailItem = false;
    this.otherItemComments = '';
    //6
    this.doorsPrice = 0; //
    this.doorChangingPrice = 200; //
    this.doorsChanging = false; //
    this.doorsType = '';
    //7
    this.spotlightPrice = 50; //
    this.switcherInsidePrice = 50; //
    this.switcherOutsidePrice = 100; //
    this.socketPrice = 80; //
    this.mirrorPrice = 0; //
    this.mirrorInstallationPrice = 100; //
    this.fanPrice = 250; //
    this.spotlightsQty = 0; //
    this.socketsQty = 0; //
    this.mirrorElectrical = false;
    this.fanElectrical = false;
    this.spotlightsElectrical = false;
    this.switcherInsideElectrical = false;
    this.switcherOutsideElectrical = false;
    this.socketsElectrical = false;
    //8
    this.ceilingPriceWhite = 100; //
    this.ceilingPricePlastered = 150; //
    this.paintingCeiling = CeilingPainting.No;
  }
}
