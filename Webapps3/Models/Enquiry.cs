using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Webapps3.Models
{
    public class Enquiry
    {
        [Key]
        public int id { get; set; }

        public string name { get; set; }

        public string surname { get; set; }

        public string email { get; set; }

        public string question { get; set; }
    }
}