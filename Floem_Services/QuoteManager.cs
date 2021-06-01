using Floem_DAL;
using Floem_Models;

namespace Floem_Services
{
    public class QuoteManager : IQuoteManager
    {
        private readonly IRepository _repo;
        public QuoteManager(IRepository repo)
        {
            _repo = repo;
        }

        public string AddQuote(FloemQuoteModel model)
        {
            return _repo.SaveQuoteToDbAndReturnId(model);
        }

        public FloemQuoteModel FindQuoteById(string id)
        {
            return _repo.GetQuote(id);
        }

        public void UpdateQuote(FloemQuoteModel model)
        {
            _repo.UpdateQuoteInDb(model);
        }
    }
}
