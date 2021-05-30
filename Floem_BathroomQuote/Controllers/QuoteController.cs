using Floem_Models;
using Floem_Services;
using Microsoft.AspNetCore.Mvc;

namespace Floem_BathroomQuote.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuoteController : Controller
    {
        private readonly IQuoteManager _quotes;
        public QuoteController(IQuoteManager quotes)
        {
            _quotes = quotes;
        }

        /// <summary>
        /// POST: api/quote/save
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpPost("save")]
        public IActionResult SaveQuote([FromBody] FloemQuoteModel model)
        {
            return Ok();
        }

        /// <summary>
        /// GET: api/quote/test-get
        /// </summary>
        [HttpGet("test-get")]
        public IActionResult TestGetEndpoint(int id)
        {
            return Json("GET works fine. Id:" + id);
        }

        /// <summary>
        /// POST: api/quote/test-post
        /// </summary>
        [HttpPost("test-post")]
        public IActionResult TestPostEndpoint([FromBody] TestModel model)
        {
            return Ok();
        }
    }
}
