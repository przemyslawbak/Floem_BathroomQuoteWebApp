using System.ComponentModel.DataAnnotations;

namespace Floem_Models
{
    public class FloemAdminModel
    {
        [Key]
        public int Id { get; set; }
        public int RemovalsPrice { get; set; }
        public int FloorTilingPrice { get; set; }
        public int FloorLvtPrice { get; set; }
        public int WallTilingPrice { get; set; }
        public int WallPlasteringHalfPrice { get; set; }
        public int WallPaintingWhitePrice { get; set; }
        public int WallPlasteringAll { get; set; }
        public int UnitInstallation { get; set; }
        public int DoorChangingPrice { get; set; }
        public int SpotlightPrice { get; set; }
        public int SwitcherInsidePrice { get; set; }
        public int SwitcherOutsidePrice { get; set; }
        public int SocketPrice { get; set; }
        public int MirrorInstallationPrice { get; set; }
        public int FanPrice { get; set; }
        public int CeilingPriceWhite { get; set; }
        public int CeilingPricePlastered { get; set; }
        public string Password { get; set; }
    }
}
