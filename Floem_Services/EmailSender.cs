using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;
using System.Threading.Tasks;

namespace Floem_Services
{
    public class EmailSender : IEmailSender
    {
        private readonly IConfiguration _configuration;

        public EmailSender(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<bool> SendEmailAsync(string email, string subject, string message)
        {
            MimeMessage msg = PrepareMesaage(message, subject, email);

            return await SendViaClientAsync(msg);
        }

        private MimeMessage PrepareMesaage(string message, string subject, string to)
        {
            MimeMessage mailMessage = new MimeMessage();
            mailMessage.From.Add(new MailboxAddress("EmailSender:Name", _configuration["EmailSender:Address"]));
            mailMessage.To.Add(new MailboxAddress("EmailSender:Name", to));
            mailMessage.Subject = subject;
            mailMessage.Body = new TextPart("plain")
            {
                Text = message
            };

            return mailMessage;
        }

        private async Task<bool> SendViaClientAsync(MimeMessage msg)
        {
            try
            {
                using (SmtpClient client = new SmtpClient())
                {
                    client.ServerCertificateValidationCallback = (s, c, h, e) => true;
                    client.Connect("EmailSender:Host", 465, true);
                    client.Authenticate(_configuration["EmailSender:Address"], _configuration["EmailSender:Password"]);
                    await client.SendAsync(msg);
                    client.Disconnect(true);
                }

                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
