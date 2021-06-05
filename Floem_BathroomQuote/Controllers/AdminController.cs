using Floem_Models;
using Microsoft.AspNetCore.Mvc;

namespace Floem_BathroomQuote.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : Controller
    {
        /// <summary>
        /// POST: api/admin/get-settings
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpGet("get-settings")]
        public IActionResult GetAdminSettings()
        {
            return Ok();
        }
    }
}
