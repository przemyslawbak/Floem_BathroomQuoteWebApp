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
        /// POST: api/quote/save-quote
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpPost("save-quote")]
        public IActionResult SaveQuote([FromBody] FloemQuoteModel model)
        {
            if (model == null)
            {
                return new ObjectResult("Quote data is wrong.") { StatusCode = 422 };
            }

            if (!ModelState.IsValid)
            {
                return new ObjectResult("Quote data is wrong.") { StatusCode = 422 };
            }

            string id = _quotes.AddQuote(model);

            if (string.IsNullOrEmpty(id))
            {
                return new ObjectResult("Quote storing error.") { StatusCode = 500 };
            }

            return Json(id);
        }

        /// <summary>
        /// POST: api/quote/put-quote
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpPut("put-quote")]
        public IActionResult PutQuote([FromBody] FloemQuoteModel model)
        {
            if (model == null)
            {
                return new ObjectResult("Quote data is wrong.") { StatusCode = 422 };
            }

            if (!ModelState.IsValid)
            {
                return new ObjectResult("Quote data is wrong.") { StatusCode = 422 };
            }

            _quotes.UpdateQuote(model);

            return Ok();
        }

        /// <summary>
        /// GET: api/quote/get-quote
        /// </summary>
        [HttpGet("get-quote")]
        public IActionResult TestGetEndpoint(string id)
        {
            FloemQuoteModel quote = _quotes.FindQuoteById(id);
            
            if (quote == null)
            {
                return new ObjectResult("Quote not fund.") { StatusCode = 400 };
            }

            return Json(quote);
        }
    }
}
