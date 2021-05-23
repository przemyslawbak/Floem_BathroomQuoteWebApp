export enum DimentionUnits {
  Inches = 'in',
  Centimeters = 'cm',
}

export class QuoteItems {
  //1 dimemtions
  width: number;
  height: number;
  depth: number;
  units: DimentionUnits;
  //2 removal
  removals: boolean;
  removalsPrice: number;
  //3 floor
  floorLvt: boolean;
  floorTiled: boolean;
  floorOther: boolean;
  floorNone: boolean;
  floorCode: string;
  floorType: string;
  floorPrice: number;
  floorOtherComments: string;
  //4 wall
  wallsFullHeight: boolean;
  wallsHalfHeight: boolean;
  wallsPlastered: boolean;
  wallsOther: boolean;
  wallsNone: boolean;
  wallsCode: string;
  wallsType: string;
  wallPrice: number;
  wallsOtherComments: string;
  //5 items
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
  //6 doors
  doorsChanging: boolean;
  doorsType: string;
  doorsPrice: number;
  //7 electrical
  mirrorElectrical: boolean;
  mirrorPrice: number;
  fanElectrical: boolean;
  fanPrice: number;
  spotlightsElectrical: boolean;
  spotlightPrice: number;
  switcherElectrical: boolean;
  switcherPrice: number;
  socketsElectrical: boolean;
  socketPrice: number;
  socketsQty: number;
  spotlightsQty: number;
  //8 ceiling
  paintingCeiling: boolean;
  ceilingPrice: number;

  constructor() {
    this.spotlightPrice = 0;
    this.switcherPrice = 0;
    this.removalsPrice = 0;
    this.ensuitePrice = 0;
    this.ceilingPrice = 0;
    this.toiletPrice = 0;
    this.socketPrice = 0;
    this.mirrorPrice = 0;
    this.mixerPrice = 0;
    this.doorsPrice = 0;
    this.basinPrice = 0;
    this.bathPrice = 0;
    this.railPrice = 0;
    this.fanPrice = 0;
    this.width = 100;
    this.height = 200;
    this.depth = 100;
    this.units = DimentionUnits.Centimeters;
    this.removals = false;
    this.floorLvt = false;
    this.floorOther = false;
    this.floorNone = true;
    this.floorTiled = false;
    this.floorOtherComments = '';
    this.floorCode = '';
    this.floorType = '';
    this.floorPrice = 0;
    this.wallsFullHeight = false;
    this.wallsHalfHeight = false;
    this.wallsOther = false;
    this.wallsNone = true;
    this.wallsPlastered = false;
    this.wallsOtherComments = '';
    this.wallsCode = '';
    this.wallsType = '';
    this.wallPrice = 0;
    this.bathItem = false;
    this.basinItem = false;
    this.otherItem = false;
    this.ensuiteItem = false;
    this.mixerItem = false;
    this.toiletItem = false;
    this.towelRailItem = false;
    this.otherItemComments = '';
    this.doorsChanging = false;
    this.doorsType = '';
    this.mirrorElectrical = false;
    this.fanElectrical = false;
    this.spotlightsElectrical = false;
    this.switcherElectrical = false;
    this.socketsElectrical = false;
    this.spotlightsQty = 0;
    this.socketsQty = 0;
    this.paintingCeiling = false;
  }
}
