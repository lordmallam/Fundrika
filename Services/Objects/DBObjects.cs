using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Fundrika_Services.Objects
{
    public class AccountTypeObj
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }


    public class AdminsObj
    {
        public int Id { get; set;}

        public string Name { get; set; }

        public byte[] Icon { get; set; }

        public string Address { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public DateTime Created { get; set; }

        public string Status { get; set; }

        public bool IsActive { get; set; }

        public string ActivationCode { get; set; }

        public string Type { get; set; }

        public string CreatedBy { get; set; }

    }


    public class AuditsObj
    {
        public int Id { get; set; }

        public string ItemID { get; set; }

        public string Entity { get; set; }

        public string Action { get; set; }

        public string Performedby { get; set; }

        public DateTime Created { get; set; }

        public string OldValue { get; set; }

        public string NewValue { get; set; }

        public string IP { get; set; }

    }


    public class CategoriesObj
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public byte[] Icon { get; set; }

        public string Color { get; set; }

    }

    public class CommentsObj
    {
        public int Id { get; set; }

        public string Item { get; set; }

        public DateTime Created { get; set; }

        public long ProjectId { get; set; }

        public int UserId { get; set; }

    }


    public class CountriesObj
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public byte[] Icon { get; set; }

        public string URL { get; set; }

        public string Currency { get; set; }

        public string CurrencySymbol { get; set; }

    }


    public class DonationsObj
    {
        public int Id { get; set; }

        public DateTime Created { get; set; }

        public decimal Amount { get; set; }

        public string DonanationType { get; set; }

        public string TransNo { get; set; }

        public int IncentiveId { get; set; }

        public long ProjectId { get; set; }

        public int PaymentTypeId { get; set; }

        public int UserId { get; set; }

    }


    public class FAQsObj
    {
        public int Id { get; set; }

        public string Question { get; set; }

        public string Answer { get; set; }

        public DateTime? Created { get; set; }

    }

    public class ImagesObj
    {
        public int Id { get; set; }

        public string URL { get; set; }

        public long ProjectId { get; set; }

    }


    public class IncentivesObj
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int? Qty { get; set; }

        public string EstimatedDeliveryTime { get; set; }

        public long ProjectId { get; set; }

        public string DeliveryLocation { get; set; }

    }


    public class PaymentTypesObj
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public byte[] Icon { get; set; }

    }


    public class PayoutsObj
    {
        public int Id { get; set; }

        public DateTime Created { get; set; }

        public decimal Amount { get; set; }

        public string PayoutType { get; set; }

        public string TransNo { get; set; }

        public long ProjectId { get; set; }

        public int OrganisationId { get; set; }

    }


    public class ProgressesObj
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime Implimented { get; set; }

        public DateTime Created { get; set; }

        public long ProjectId { get; set; }

    }


    public class ProjectCategoriesObj
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public long ProjectId { get; set; }

    }


    public class ProjectPropertiesObj
    {
        public int Id { get; set; }

        public string Key { get; set; }

        public string Value { get; set; }

        public long ProjectId { get; set; }

    }


    public class ProjectPropertyCategoriesObj
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public string Key { get; set; }

    }


    public class ProjectsObj
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public string ShortDesc { get; set; }

        public string Location { get; set; }

        public string Description { get; set; }

        public string Target { get; set; }

        public string Duration { get; set; }

        public byte[] Icon { get; set; }

        public int OrganisationId { get; set; }

        public string Video { get; set; }

        public string YouTube { get; set; }

    }


    public class ProjectSubCategoriesObj
    {
        public int Id { get; set; }

        public int SubCategoryId { get; set; }

        public long ProjectId { get; set; }

    }

    public class ProjectTeamObj
    {
        public int Id { get; set; }

        public long ProjectId { get; set; }

        public int UserId { get; set; }

    }


    public class QuestionsObj
    {
        public int Id { get; set; }

        public string Item { get; set; }

        public string Answer { get; set; }

        public DateTime Created { get; set; }

        public long ProjectId { get; set; }

        public int UserId { get; set; }

    }


    public class RemindersObj
    {
        public int Id { get; set; }

        public DateTime Created { get; set; }

        public bool IsActive { get; set; }

        public DateTime FinalDate { get; set; }

        public long ProjectId { get; set; }

        public int UserId { get; set; }

    }


    public class SubCategoriesObj
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public byte[] Icon { get; set; }

        public string Color { get; set; }

        public int CategoryId { get; set; }

    }


    public class UserAccountTypesObj
    {
        public int Id { get; set; }

        public int AccountTypeId { get; set; }

        public int UserId { get; set; }

    }


    public class UsersObj
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public byte[] Icon { get; set; }

        public string OrgCode { get; set; }

        public string Address { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string LoginType { get; set; }

        public string LoginCode { get; set; }

        public string ContactPerson { get; set; }

        public string Bank { get; set; }

        public string AccountNumber { get; set; }

        public string AccountName { get; set; }

        public string SwiftCode { get; set; }

        public string SortCode { get; set; }

        public string Currency { get; set; }

        public DateTime Created { get; set; }

        public string Status { get; set; }

        public bool IsActive { get; set; }

        public string ActivationCode { get; set; }

        public int? CountryId { get; set; }

    }



}