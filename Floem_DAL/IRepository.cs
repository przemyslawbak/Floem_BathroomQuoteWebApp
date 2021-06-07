using Floem_Models;

namespace Floem_DAL
{
    public interface IRepository
    {
        void SaveClinetToDb(FloemClientModel model);
        string SaveQuoteToDbAndReturnId(FloemQuoteModel model);
        void UpdateQuoteInDb(FloemQuoteModel model);
        FloemQuoteModel GetQuote(string id);
        FloemAdminModel GetAdminManager();
        void UpdateAdminModelInDb(FloemAdminModel model);
    }
}