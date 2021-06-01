using Floem_Models;
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

        public string CombineClientBookingMessage(string name, string link, string clientsDate, string clientsTime)
        {
            string clientsName = string.IsNullOrEmpty(name) ? "customer" : name;
            string message = @"Dear " + clientsName + @", your booking request for " + clientsDate.Substring(0, 10) + " - " + clientsTime + @" was sent to Floem. We will contact you soon to confirm your reservation. For any further questions, please do not hesitate to contact us, we will be happy to answer your questions.
            
You can find and edit your quote entering here: " + link + @"

Floem Renovations
w: https://www.floem.co.uk/
e: info@floem.co.uk
t: 7405679021";
            return message;
        }

        public string CombineFloemBookingMessage(FloemClientModel client)
        {
            string clientsName = string.IsNullOrEmpty(client.Name) ? "(unknown)" : client.Name;
            string clientsEmail = string.IsNullOrEmpty(client.Email) ? "(unknown)" : client.Email;
            string clientsPhone = string.IsNullOrEmpty(client.PhoneNumber) ? "(unknown)" : client.PhoneNumber;
            string clientsStreet = string.IsNullOrEmpty(client.Street) ? "(unknown)" : client.Street;
            string clientsApt= string.IsNullOrEmpty(client.AptNo) ? "(unknown)" : client.AptNo;
            string clientsCity = string.IsNullOrEmpty(client.City) ? "(unknown)" : client.City;
            string clientsState = string.IsNullOrEmpty(client.State) ? "(unknown)" : client.State;
            string clientsMessage = string.IsNullOrEmpty(client.Message) ? "(unknown)" : client.Message;
            string clientsDate = string.IsNullOrEmpty(client.Date) ? "(unknown)" : client.Date;
            string clientsTime = string.IsNullOrEmpty(client.Time) ? "(unknown)" : client.Time;
            string clientsQuoteLink = string.IsNullOrEmpty(client.QuoteLink) ? "(unknown)" : client.QuoteLink;

            string message = "Booking request received for " + clientsDate.Substring(0, 10) + " - " + clientsTime + @". Client details:

            Name: " + clientsName + @"
            Email: " + clientsEmail + @"
            Phone: " + clientsPhone + @"
            Street: " + clientsStreet + @"
            Apartment: " + clientsApt + @"
            City: " + clientsCity + @"
            State: " + clientsState + @"
            Message from the client: " + clientsMessage + @"
            Quote link: " + clientsQuoteLink;
            return message;
        }

        public string CombineLinkEmailMessage(string link)
        {
            string message = @"Dear customer, below you can find a link to a bathroom renovation quote with Floem. For any further questions, please do not hesitate to contact us, we will be happy to answer your questions.
            
" + link + @"

Floem Renovations
w: https://www.floem.co.uk/
e: info@floem.co.uk
t: 7405679021";
            return message;
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
                    client.Connect(_configuration["EmailSender:Host"], 587, false);
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
