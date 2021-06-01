using Floem_Models;
using System.Threading.Tasks;

namespace Floem_Services
{
    public interface IEmailSender
    {
        Task<bool> SendEmailAsync(string email, string subject, string message);
        string CombineClientBookingMessage(string name, string quoteLink);
        string CombineFloemBookingMessage(FloemClientModel client);
    }
}