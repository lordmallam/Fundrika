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
    
    public partial class Payout
    {
        public int Id { get; set; }
        public System.DateTime Created { get; set; }
        public decimal Amount { get; set; }
        public string PayoutType { get; set; }
        public string TransNo { get; set; }
        public long ProjectId { get; set; }
        public int OrganisationId { get; set; }
    
        public virtual User User { get; set; }
        public virtual Project Project { get; set; }
    }
}