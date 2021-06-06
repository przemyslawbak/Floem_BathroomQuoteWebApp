using Floem_Models;
using Floem_Services;
using Microsoft.AspNetCore.Mvc;

namespace Floem_BathroomQuote.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : Controller
    {
        private readonly IAdminManager _admin;

        public AdminController(IAdminManager admin)
        {
            _admin = admin;
        }

        /// <summary>
        /// GET: api/admin/get-settings
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpGet("get-settings")]
        public IActionResult GetAdminSettings()
        {
            FloemAdminModel settings = _admin.GetAdminModel();
            return Json(settings);
        }
    }
}
