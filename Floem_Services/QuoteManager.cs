using Floem_DAL;

namespace Floem_Services
{
    public class QuoteManager : IQuoteManager
    {
        private readonly IRepository _repo;
        public QuoteManager(IRepository repo)
        {
            _repo = repo;
        }
    }
}
