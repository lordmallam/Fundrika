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
    
    public partial class PaymentType
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PaymentType()
        {
            this.Donations = new HashSet<Donation>();
        }
    
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public byte[] Icon { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Donation> Donations { get; set; }
    }
}