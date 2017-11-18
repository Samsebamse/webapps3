using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using Webapps3.Context;
using Webapps3.Models;

namespace Webapps3
{
    public class DB : DbContext
    {
        public DB() : base("name=Kundeservicedb")
        {
            Database.CreateIfNotExists();
            Database.SetInitializer(new DBInit());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

        public virtual DbSet<Enquiry> Enquiries { get; set; }
        public virtual DbSet<Faq> Faqs { get; set; }

    }
}