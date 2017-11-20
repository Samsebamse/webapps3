using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Webapps3.Models;

namespace Webapps3
{
    public class SpmDB
    {
        DB db = new DB();

        public List<Enquiry> hentAlleEnquiries()
        {
            List<Enquiry> alleEnquiries = db.Enquiries.ToList();
            return alleEnquiries;
        }

        public List<Faq> hentAlleFaqs()
        {
            List<Faq> alleFaqs = db.Faqs.ToList();
            return alleFaqs;
        }

        public bool lagreSpm(Enquiry innSpm)
        {
            Enquiry nyttSpm = new Enquiry
            {
                name = innSpm.name,
                surname = innSpm.surname,
                email = innSpm.email,
                question = innSpm.question
            };

            try
            {
                db.Enquiries.Add(nyttSpm);
                db.SaveChanges();
            }
            catch (Exception feil)
            {
                return false;
            }
            return true;
        }
    }
}