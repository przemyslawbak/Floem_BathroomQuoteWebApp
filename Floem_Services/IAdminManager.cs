using Floem_Models;

namespace Floem_Services
{
    public interface IAdminManager
    {
        FloemAdminModel GetAdminModel();
        void UpdateAdminModel(FloemAdminModel model);
    }
}