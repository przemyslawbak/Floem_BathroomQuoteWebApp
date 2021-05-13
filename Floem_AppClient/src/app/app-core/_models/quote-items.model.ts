export interface QuoteItems {
  //1 dimemtions
  width: number;
  height: number;
  depth: number;
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
}
