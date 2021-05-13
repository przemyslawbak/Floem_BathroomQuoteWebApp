export interface QuoteItems {
  //1
  width: number;
  height: number;
  depth: number;
  //2
  removals: boolean;
  //3
  floorLvt: boolean;
  floorTiled: boolean;
  floorOther: boolean;
  floorType: string;
  floorOtherComments: string;
  //4
  wallsFullHeight: boolean;
  wallsHalfHeight: boolean;
  wallsPlastered: boolean;
  wallsOther: boolean;
  wallsType: string;
  wallsOtherComments: string;
  //5
  bathItem: boolean;
  showerItem: boolean;
  toiletItem: boolean;
  towelRailItem: boolean;
  basinItem: boolean;
  pipingItem: boolean;
  otherItem: boolean;
  otherItemComments: string;
  //6
  doorsChanging: boolean;
  doorsType: string;
  //7
  mirrorElectrical: boolean;
  fanElectrical: boolean;
  spotlightsElectrical: boolean;
  spotlightsQty: number;
  switcherElectrical: boolean;
  socketsElectrical: boolean;
  socketsQty: number;
}
