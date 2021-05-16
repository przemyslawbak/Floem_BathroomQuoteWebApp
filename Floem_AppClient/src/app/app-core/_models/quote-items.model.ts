export class QuoteItems {
  //1 dimemtions
  width: number;
  height: number;
  depth: number;
  unitsCm: boolean;
  unitsIn: boolean;
  //2 removal
  removals: boolean;
  //3 floor
  floorLvt: boolean;
  floorTiled: boolean;
  floorOther: boolean;
  floorType: string;
  floorOtherComments: string;
  //4 wall
  wallsFullHeight: boolean;
  wallsHalfHeight: boolean;
  wallsPlastered: boolean;
  wallsOther: boolean;
  wallsType: string;
  wallsOtherComments: string;
  //5 items
  bathItem: boolean;
  showerItem: boolean;
  toiletItem: boolean;
  towelRailItem: boolean;
  basinItem: boolean;
  pipingItem: boolean;
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
    this.width = 1;
    this.height = 1;
    this.depth = 1;
    this.unitsCm = true;
    this.unitsIn = false;
    this.removals = false;
    this.floorLvt = false;
    this.floorOther = false;
    this.floorTiled = false;
    this.floorOtherComments = '';
    this.floorType = '';
    this.wallsFullHeight = true;
    this.wallsHalfHeight = false;
    this.wallsOther = false;
    this.wallsPlastered = false;
    this.wallsOtherComments = '';
    this.wallsType = '';
    this.bathItem = false;
    this.basinItem = false;
    this.otherItem = false;
    this.pipingItem = false;
    this.showerItem = false;
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
