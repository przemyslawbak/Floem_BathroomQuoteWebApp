using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Floem_Models
{
    public class FloemClientModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Valid email address is required.")]
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Street is required.")]
        public string Street { get; set; }
        public string AptNo { get; set; }
        [Required(ErrorMessage = "City is required.")]
        public string City { get; set; }
        public string State { get; set; }
        public string Message { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string QuoteLink { get; set; }
    }
}
