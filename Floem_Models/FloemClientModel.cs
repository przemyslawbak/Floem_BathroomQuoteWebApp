﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Floem_Models
{
    public class FloemClientModel
    {
        [Key]
        public Guid Id { get; set; }
        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Valid email address is required.")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Phone is required.")]
        [Phone(ErrorMessage = "Valid phone number is required.")]
        public string PhoneNumber { get; set; }
        [Required(ErrorMessage = "Street is required.")]
        public string Street { get; set; }
        public string AptNo { get; set; }
        [Required(ErrorMessage = "City is required.")]
        public string City { get; set; }
        public string State { get; set; }
        public string Message { get; set; }
    }
}