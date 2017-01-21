﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Fundrika.Data
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class FundRikaEntities : DbContext
    {
        public FundRikaEntities()
            : base("name=FundRikaEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AccountType> AccountTypes { get; set; }
        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Audit> Audits { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Donation> Donations { get; set; }
        public virtual DbSet<FAQ> FAQs { get; set; }
        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<Incentive> Incentives { get; set; }
        public virtual DbSet<PaymentType> PaymentTypes { get; set; }
        public virtual DbSet<Payout> Payouts { get; set; }
        public virtual DbSet<Progress> Progresses { get; set; }
        public virtual DbSet<ProjectCategory> ProjectCategories { get; set; }
        public virtual DbSet<ProjectProperty> ProjectProperties { get; set; }
        public virtual DbSet<ProjectPropertyCategory> ProjectPropertyCategories { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<ProjectSubCategory> ProjectSubCategories { get; set; }
        public virtual DbSet<ProjectTeam> ProjectTeams { get; set; }
        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<Reminder> Reminders { get; set; }
        public virtual DbSet<SubCategory> SubCategories { get; set; }
        public virtual DbSet<UserAccountType> UserAccountTypes { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}