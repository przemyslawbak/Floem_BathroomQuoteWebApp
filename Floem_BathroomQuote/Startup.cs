using Floem_DAL;
using Floem_Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Floem_BathroomQuote
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                    .SetIsOriginAllowedToAllowWildcardSubdomains()
                    .WithOrigins("*localhost:4200", "*testuj-strone.com.pl")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials()
                    .SetIsOriginAllowed((host) => true));
            });
            services.AddControllers();
            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]));
            services.AddTransient<IEmailSender, EmailSender>();
            services.AddTransient<IQuoteManager, QuoteManager>();
            services.AddTransient<IClientManager, ClientManager>();
            services.AddTransient<IRepository, EFRepository>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors("CorsPolicy");
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapFallbackToFile("/form/{id}", "/index.html?id={id}");
                /*
                endpoints.MapFallbackToFile("/test/{id}", "/test.html", new StaticFileOptions
                {
                    OnPrepareResponse = x =>
                    {
                        var httpContext = x.Context;
                        var path = httpContext.Request.RouteValues["path"];
                        // now you get the original request path
                    }
                });
                */
                endpoints.MapFallbackToFile("/", "/index.html");
            });
        }
    }
}
