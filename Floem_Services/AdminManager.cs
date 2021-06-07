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

        public void UpdateAdminModel(FloemAdminModel model)
        {
            _repo.UpdateAdminModelInDb(model);
        }
    }
}
