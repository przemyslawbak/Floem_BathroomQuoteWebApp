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
                WallPlasteringAll = 350,
                CeilingPricePlastered = 150,
                CeilingPriceWhite = 100,
                DoorChangingPrice = 200,
                FanPrice = 250,
                FloorLvtPrice = 150,
                FloorTilingPrice = 60,
                Id = 1,
                MirrorInstallationPrice = 100,
                Password = "",
                RemovalsPrice = 300,
                SocketPrice = 80,
                SpotlightPrice = 50,
                SwitcherInsidePrice = 50,
                SwitcherOutsidePrice = 100,
                UnitInstallation = 150,
                WallPaintingWhitePrice = 150,
                WallPlasteringHalfPrice = 200,
                WallTilingPrice = 45
            };
        }

        public void UpdateAdminModel(FloemAdminModel model)
        {
            _repo.UpdateAdminModelInDb(model);
        }
    }
}
