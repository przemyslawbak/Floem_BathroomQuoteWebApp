using Floem_DAL;

namespace Floem_Services
{
    public class ClientManager : IClientManager
    {
        private readonly IRepository _repo;
        public ClientManager(IRepository repo)
        {
            _repo = repo;
        }
    }
}
