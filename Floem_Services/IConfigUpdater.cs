using Floem_Models;

namespace Floem_Services
{
    public interface IConfigUpdater
    {
        void AddOrUpdateAppSetting<T>(string key, T value);
        AdminModel GetAdminSettings();
    }
}