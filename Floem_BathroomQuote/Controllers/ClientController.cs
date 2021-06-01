using Floem_Models;
using Floem_Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Floem_BathroomQuote.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IClientManager _clients;
        private readonly IEmailSender _email;
        public ClientController(IClientManager clients, IEmailSender email, IConfiguration config)
        {
            _configuration = config;
            _clients = clients;
            _email = email;
        }

        /// <summary>
        /// POST: api/client/save-client
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpPost("save-client")]
        public IActionResult SaveClientAndSendMessages([FromBody] FloemClientModel model)
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

            //todo: separate endpoint (future)
            _email.SendEmailAsync(model.Email, "Floem consultancy booked", _email.CombineClientBookingMessage(model.Name, model.QuoteLink, model.Date, model.Time));
            _email.SendEmailAsync(_configuration["EmailSender:FloemEmailAddress"], "Floem consultancy booked", _email.CombineFloemBookingMessage(model));
            return Ok();
        }

        /// <summary>
        /// POST: api/client/email-link
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpPost("email-link")]
        public IActionResult SendLinkMessages([FromBody] EmailLinkModel model)
        {
            if (model == null)
            {
                return new ObjectResult("User data is wrong.") { StatusCode = 422 };
            }

            if (!ModelState.IsValid)
            {
                return new ObjectResult("User data is wrong.") { StatusCode = 422 };
            }

            _email.SendEmailAsync(model.Email, "Floem quote link", _email.CombineLinkEmailMessage(model.Link));
            return Ok();
        }
    }
}
