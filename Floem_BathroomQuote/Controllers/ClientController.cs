using Floem_Models;
using Floem_Services;
using Microsoft.AspNetCore.Mvc;

namespace Floem_BathroomQuote.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : Controller
    {
        private readonly IClientManager _clients;
        public ClientController(IClientManager clients)
        {
            _clients = clients;
        }

        /// <summary>
        /// POST: api/quote/save-client
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpPost("save")]
        public IActionResult SaveQuote([FromBody] FloemClientModel model)
        {
            return Ok();
        }
    }
}
