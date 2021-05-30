using System;
using System.ComponentModel.DataAnnotations;

namespace Floem_Models
{
    public class FloemQuoteModel
    {
        [Key]
        public Guid Id { get; set; }
        //1
        public double WidthCm { get; set; }
        public double HeightCm { get; set; }
        public double DepthCm { get; set; }
        public double WidthIn { get; set; }
        public double HeightIn { get; set; }
        public double DepthIn { get; set; }
        public double WidthFt { get; set; }
        public double HeightFt { get; set; }
        public double DepthFt { get; set; }
        public string Units { get; set; }
        //2
        public bool Removals { get; set; }
        public decimal RemovalsPrice { get; set; }
        public decimal RemovalsTotal { get; set; }
        //3
        public bool FloorLvt { get; set; }
        public bool FloorTiled { get; set; }
        public bool FloorOther { get; set; }
        public bool FloorNone { get; set; }
        public string FloorCode { get; set; }
        public string FloorType { get; set; }
        public decimal FloorPrice { get; set; }
        public decimal FloorTilingPrice { get; set; }
        public decimal FloorLvtPrice { get; set; }
        public string FloorOtherComments { get; set; }
        public decimal FloorTotal { get; set; }
        //4
        public bool WallsFullHeight { get; set; }
        public bool WallsHalfHeight { get; set; }
        public bool WallsPlastered { get; set; }
        public bool WallsPaintedWhite { get; set; }
        public bool WallsOther { get; set; }
        public bool WallsNone { get; set; }
        public string WallsCode { get; set; }
        public string WallsType { get; set; }
        public decimal WallPrice { get; set; }
        public decimal WallTilingPrice { get; set; }
        public decimal WallPlasteringHalfPrice { get; set; }
        public decimal WallPaintingWhitePrice { get; set; }
        public int WallPlasteringAll { get; set; }
        public int WallPaintingWhite { get; set; }
        public string WallsOtherComments { get; set; }
        public decimal WallsTotal { get; set; }
        //5
        public int UnitInstallation { get; set; }
        public bool BathItem { get; set; }
        public decimal BathPrice { get; set; }
        public bool EnsuiteItem { get; set; }
        public decimal EnsuitePrice { get; set; }
        public bool MixerItem { get; set; }
        public decimal MixerPrice { get; set; }
        public bool ToiletItem { get; set; }
        public decimal ToiletPrice { get; set; }
        public bool TowelRailItem { get; set; }
        public decimal RailPrice { get; set; }
        public bool BasinItem { get; set; }
        public decimal BasinPrice { get; set; }
        public bool OtherItem { get; set; }
        public string OtherItemComments { get; set; }
        public decimal ItemsTotal { get; set; }
        //6
        public bool DoorsChanging { get; set; }
        public string DoorsType { get; set; }
        public decimal DoorChangingPrice { get; set; }
        public decimal DoorsPrice { get; set; }
        public decimal DoorsTotal { get; set; }
        //7
        public bool MirrorElectrical { get; set; }
        public decimal MirrorInstallationPrice { get; set; }
        public decimal MirrorPrice { get; set; }
        public bool FanElectrical { get; set; }
        public decimal FanPrice { get; set; }
        public bool SpotlightsElectrical { get; set; }
        public decimal SpotlightPrice { get; set; }
        public bool SwitcherInsideElectrical { get; set; }
        public bool SwitcherOutsideElectrical { get; set; }
        public decimal SwitcherOutsidePrice { get; set; }
        public decimal SwitcherInsidePrice { get; set; }
        public bool SocketsElectrical { get; set; }
        public decimal SocketPrice { get; set; }
        public int SocketsQty { get; set; }
        public int SpotlightsQty { get; set; }
        public decimal ElectricalTotal { get; set; }
        //8
        public string PaintingCeiling { get; set; }
        public decimal CeilingPriceWhite { get; set; }
        public decimal CeilingPricePlastered { get; set; }
        public decimal CeilingTotal { get; set; }
    }
}
