using Floem_Models;
using Floem_Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Floem_BathroomQuote.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : Controller
    {
        private readonly IAdminManager _admin;
        private readonly IConfiguration _configuration;

        public AdminController(IAdminManager admin, IConfiguration config)
        {
            _admin = admin;
            _configuration = config;
        }

        /// <summary>
        /// GET: api/admin/get-settings
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpGet("get-settings")]
        public IActionResult GetAdminSettings()
        {
            FloemAdminModel settings = _admin.GetAdminModel();

            if (settings == null)
            {
                return Json(_admin.GetInitialSettings());
            }

            return Json(settings);
        }

        /// <summary>
        /// POST: api/admin/set-settings
        /// </summary>
        /// <returns>Status code.</returns>
        [HttpPost("set-settings")]
        public IActionResult SetAdminSettings([FromBody] FloemAdminModel model)
        {
            if (model.Password != _configuration["Admin:Password"])
            {
                return new ObjectResult("Wrong password.") { StatusCode = 401 };
            }

            _admin.UpdateAdminModel(model);

            return Ok();
        }
    }
}
