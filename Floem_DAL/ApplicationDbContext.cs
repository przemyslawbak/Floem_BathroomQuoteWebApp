using Floem_Models;
using Microsoft.EntityFrameworkCore;

namespace Floem_DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<FloemClientModel> FloemClients { get; set; }
        public DbSet<FloemQuoteModel> FloemQuotes { get; set; }
        public DbSet<FloemAdminModel> FloemAdminModel { get; set; }
    }
}
