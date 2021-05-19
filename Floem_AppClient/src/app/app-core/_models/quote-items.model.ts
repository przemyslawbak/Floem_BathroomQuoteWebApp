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
  //3 floor
  floorLvt: boolean;
  floorTiled: boolean;
  floorOther: boolean;
  floorNone: boolean;
  floorType: string;
  floorOtherComments: string;
  //4 wall
  wallsFullHeight: boolean;
  wallsHalfHeight: boolean;
  wallsPlastered: boolean;
  wallsOther: boolean;
  wallsNone: boolean;
  wallsType: string;
  wallsOtherComments: string;
  //5 items
  bathItem: boolean;
  ensuiteItem: boolean;
  mixerItem: boolean;
  toiletItem: boolean;
  towelRailItem: boolean;
  basinItem: boolean;
  otherItem: boolean;
  otherItemComments: string;
  //6 doors
  doorsChanging: boolean;
  doorsType: string;
  //7 electrical
  mirrorElectrical: boolean;
  fanElectrical: boolean;
  spotlightsElectrical: boolean;
  spotlightsQty: number;
  switcherElectrical: boolean;
  socketsElectrical: boolean;
  socketsQty: number;

  constructor() {
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
    this.floorType = '';
    this.wallsFullHeight = true;
    this.wallsHalfHeight = false;
    this.wallsOther = false;
    this.wallsNone = true;
    this.wallsPlastered = false;
    this.wallsOtherComments = '';
    this.wallsType = '';
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
  }
}
