using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Webapps3.Models;

namespace Webapps3.Context
{
    public class DBInit : DropCreateDatabaseAlways<DB>
    {

        protected override void Seed(DB context)
        {
            AddFaqs(context);
        }

        public void AddFaqs(DB context)
        {
            context.Faqs.Add(new Faq() { question = "Hvorfor velge oss?", answer = "Fordi vi har best service!" });
            context.Faqs.Add(new Faq() { question = "Får barn lavere priser?", answer = "Selvfølelig" });
            context.Faqs.Add(new Faq() { question = "Hva er aldersgrensen for å fly alene uten medfølger?", answer = "18år" });

            base.Seed(context);
        }
    }
}