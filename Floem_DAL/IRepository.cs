using Floem_Models;

namespace Floem_DAL
{
    public interface IRepository
    {
        void SaveClinetToDb(FloemClientModel model);
    }
}