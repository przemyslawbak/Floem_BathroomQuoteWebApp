using Floem_Models;
using Microsoft.AspNetCore.Mvc;

namespace Floem_BathroomQuote.Controllers
{
    public class QuoteController : Controller
    {
        /// <summary>
        /// POST: api/quote/save
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpPost("save")]
        public IActionResult SaveQuote([FromBody] FloemQuoteModel model)
        {
            return Ok();
        }
    }
}
