using System;
using System.ComponentModel.DataAnnotations;

namespace Floem_Models
{
    public class FloemQuoteModel
    {
        [Key]
        public Guid Id { get; set; }
        //1
        public int WidthCm { get; set; }
        public int HeightCm { get; set; }
        public int DepthCm { get; set; }
        public int WidthIn { get; set; }
        public int HeightIn { get; set; }
        public int DepthIn { get; set; }
        public int WidthFt { get; set; }
        public int HeightFt { get; set; }
        public int DepthFt { get; set; }
        public string Units { get; set; }
        //2
        public bool Removals { get; set; }
        public int RemovalsPrice { get; set; }
        public int RemovalsTotal { get; set; }
        //3
        public bool FloorLvt { get; set; }
        public bool FloorTiled { get; set; }
        public bool FloorOther { get; set; }
        public bool FloorNone { get; set; }
        public string FloorCode { get; set; }
        public string FloorType { get; set; }
        public int FloorPrice { get; set; }
        public int FloorTilingPrice { get; set; }
        public int FloorLvtPrice { get; set; }
        public string FloorOtherComments { get; set; }
        public int FloorTotal { get; set; }
        //4
        public bool WallsFullHeight { get; set; }
        public bool WallsHalfHeight { get; set; }
        public bool WallsPlastered { get; set; }
        public bool WallsPaintedWhite { get; set; }
        public bool WallsOther { get; set; }
        public bool WallsNone { get; set; }
        public string WallsCode { get; set; }
        public string WallsType { get; set; }
        public int WallPrice { get; set; }
        public int WallTilingPrice { get; set; }
        public int WallPlasteringHalfPrice { get; set; }
        public int WallPaintingWhitePrice { get; set; }
        public int WallPlasteringAll { get; set; }
        public int WallPaintingWhite { get; set; }
        public string WallsOtherComments { get; set; }
        public int WallsTotal { get; set; }
        //5
        public int UnitInstallation { get; set; }
        public bool BathItem { get; set; }
        public int BathPrice { get; set; }
        public bool EnsuiteItem { get; set; }
        public int EnsuitePrice { get; set; }
        public bool MixerItem { get; set; }
        public int MixerPrice { get; set; }
        public bool ToiletItem { get; set; }
        public int ToiletPrice { get; set; }
        public bool TowelRailItem { get; set; }
        public int RailPrice { get; set; }
        public bool BasinItem { get; set; }
        public int BasinPrice { get; set; }
        public bool OtherItem { get; set; }
        public string OtherItemComments { get; set; }
        public int ItemsTotal { get; set; }
        //6
        public bool DoorsChanging { get; set; }
        public string DoorsType { get; set; }
        public int DoorChangingPrice { get; set; }
        public int DoorsPrice { get; set; }
        public int DoorsTotal { get; set; }
        //7
        public bool MirrorElectrical { get; set; }
        public int MirrorInstallationPrice { get; set; }
        public int MirrorPrice { get; set; }
        public bool FanElectrical { get; set; }
        public int FanPrice { get; set; }
        public bool SpotlightsElectrical { get; set; }
        public int SpotlightPrice { get; set; }
        public bool SwitcherInsideElectrical { get; set; }
        public bool SwitcherOutsideElectrical { get; set; }
        public int SwitcherOutsidePrice { get; set; }
        public int SwitcherInsidePrice { get; set; }
        public bool SocketsElectrical { get; set; }
        public int SocketPrice { get; set; }
        public int SocketsQty { get; set; }
        public int SpotlightsQty { get; set; }
        public int ElectricalTotal { get; set; }
        //8
        public string PaintingCeiling { get; set; }
        public int CeilingPriceWhite { get; set; }
        public int CeilingPricePlastered { get; set; }
        public int CeilingTotal { get; set; }
    }
}
