using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Webapps3.Models
{
    public class Faq
    {
        [Key]
        public int id { get; set; }
        public string question { get; set; }
        public string answer { get; set; }
    }
}