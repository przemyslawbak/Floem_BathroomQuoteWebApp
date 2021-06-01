using Floem_Models;

namespace Floem_DAL
{
    public class EFRepository : IRepository
    {
        private readonly ApplicationDbContext _context;

        public EFRepository(ApplicationDbContext ctx)
        {
            _context = ctx;
        }

        public void SaveClinetToDb(FloemClientModel model)
        {
            if (model != null)
            {
                _context.FloemClients.Add(model);
                _context.SaveChanges();
            }
        }

        public string SaveQuoteToDbAndReturnId(FloemQuoteModel model)
        {
            if (model != null)
            {
                _context.FloemQuotes.Add(model);
                _context.SaveChanges();

                return model.Id.ToString();
            }

            return string.Empty;
        }
    }
}
