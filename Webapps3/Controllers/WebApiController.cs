using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;
using Webapps3.Models;

namespace Webapps3.Controllers
{
    public class WebApiController : ApiController
    {
        private SpmDB db = new SpmDB();

        public HttpResponseMessage Get()
        {
            List<Faq> alleFaqs = db.hentAlleFaqs();

            JavaScriptSerializer Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(alleFaqs);

            HttpResponseMessage respons = new HttpResponseMessage();
            respons.Content = new StringContent(JsonString, Encoding.UTF8, "application/json");
            respons.StatusCode = HttpStatusCode.OK;
            return respons;

        }

        // POST api/webapi
        [HttpPost]
        public HttpResponseMessage Post([FromBody]Enquiry innSpm)
        {
            if (ModelState.IsValid)
            {
                bool OK = db.lagreSpm(innSpm);
                if (OK)
                {
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };

                }
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Kunne ikke sette inn Spørsmål i DB")
            };
        }
    }
}
