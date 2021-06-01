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
        [HttpPost("save-client")]
        public IActionResult SaveClient([FromBody] FloemClientModel model)
        {
            if (model == null)
            {
                return new ObjectResult("User data is wrong.") { StatusCode = 422 };
            }

            if (!ModelState.IsValid)
            {
                return new ObjectResult("User data is wrong.") { StatusCode = 422 };
            }

            _clients.AddClient(model);
            return Ok();
        }
    }
}
