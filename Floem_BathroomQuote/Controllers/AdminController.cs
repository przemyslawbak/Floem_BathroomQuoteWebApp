using Floem_Models;
using Floem_Services;
using Microsoft.AspNetCore.Mvc;

namespace Floem_BathroomQuote.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : Controller
    {
        private readonly IConfigUpdater _configUpdate;

        public AdminController(IConfigUpdater configUpdate)
        {
            _configUpdate = configUpdate;
        }

        /// <summary>
        /// POST: api/admin/get-settings
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpGet("get-settings")]
        public IActionResult GetAdminSettings()
        {
            AdminModel settings = _configUpdate.GetAdminSettings();
            return Json(settings);
        }
    }
}
