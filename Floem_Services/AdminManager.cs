using Floem_DAL;
using Floem_Models;

namespace Floem_Services
{
    public class AdminManager : IAdminManager
    {
        private readonly IRepository _repo;
        public AdminManager(IRepository repo)
        {
            _repo = repo;
        }

        public FloemAdminModel GetAdminModel()
        {
            return _repo.GetAdminManager();
        }

        public FloemAdminModel GetInitialSettings()
        {
            return new FloemAdminModel()
            {
                WallPlasteringAll = 100,
                CeilingPricePlastered = 110,
                CeilingPriceWhite = 90,
                DoorChangingPrice = 100,
                FanPrice = 80,
                FloorLvtPrice = 150,
                FloorTilingPrice = 100,
                Id = 1,
                MirrorInstallationPrice = 130,
                Password = "",
                RemovalsPrice = 300,
                SocketPrice = 50,
                SpotlightPrice = 70,
                SwitcherInsidePrice = 50,
                SwitcherOutsidePrice = 100,
                UnitInstallation = 50,
                WallPaintingWhitePrice = 150,
                WallPlasteringHalfPrice = 100,
                WallTilingPrice = 140
            };
        }

        public void UpdateAdminModel(FloemAdminModel model)
        {
            _repo.UpdateAdminModelInDb(model);
        }
    }
}
