using Floem_DAL;
using Floem_Models;

namespace Floem_Services
{
    public class ClientManager : IClientManager
    {
        private readonly IRepository _repo;
        public ClientManager(IRepository repo)
        {
            _repo = repo;
        }

        public void AddClient(FloemClientModel model)
        {
            _repo.SaveClinetToDb(model);
        }
    }
}
