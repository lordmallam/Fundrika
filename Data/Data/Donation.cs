//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Donation
    {
        public int Id { get; set; }
        public System.DateTime Created { get; set; }
        public decimal Amount { get; set; }
        public string DonanationType { get; set; }
        public string TransNo { get; set; }
        public int IncentiveId { get; set; }
        public long ProjectId { get; set; }
        public int PaymentTypeId { get; set; }
        public int UserId { get; set; }
    
        public virtual Incentive Incentive { get; set; }
        public virtual PaymentType PaymentType { get; set; }
        public virtual Project Project { get; set; }
        public virtual User User { get; set; }
    }
}
