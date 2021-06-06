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
  id: string;
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
  removalsTotal: number;
  //3 floor
  floorLvt: boolean;
  floorTiled: boolean;
  floorOther: boolean;
  floorNone: boolean;
  floorCode: string;
  floorType: string;
  floorPrice: number;
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
  wallsOtherComments: string;
  wallsTotal: number;
  //5 units
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
  doorsPrice: number;
  doorsTotal: number;
  //7 electrical
  mirrorElectrical: boolean;
  mirrorPrice: number;
  fanElectrical: boolean;
  spotlightsElectrical: boolean;
  switcherInsideElectrical: boolean;
  switcherOutsideElectrical: boolean;
  socketsElectrical: boolean;
  socketsQty: number;
  spotlightsQty: number;
  electricalTotal: number;
  //8 ceiling
  paintingCeiling: CeilingPainting;
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
    this.removals = false; //
    //3
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
    this.doorsChanging = false; //
    this.doorsType = '';
    //7
    this.mirrorPrice = 0; //
    this.spotlightsQty = 0; //
    this.socketsQty = 0; //
    this.mirrorElectrical = false;
    this.fanElectrical = false;
    this.spotlightsElectrical = false;
    this.switcherInsideElectrical = false;
    this.switcherOutsideElectrical = false;
    this.socketsElectrical = false;
    //8
    this.paintingCeiling = CeilingPainting.No;
  }
}
