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
    }
}
