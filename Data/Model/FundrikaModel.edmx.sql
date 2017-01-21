
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 08/10/2015 17:30:58
-- Generated from EDMX file: C:\Users\Lord-Mallam\Documents\Visual Studio 2013\Projects\Fundrika\Fundrika\Model\FundrikaModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [FundRika];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_OrganisationProject]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Projects] DROP CONSTRAINT [FK_OrganisationProject];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectIncentive]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Incentives] DROP CONSTRAINT [FK_ProjectIncentive];
GO
IF OBJECT_ID(N'[dbo].[FK_SubCategoryProjectSubCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ProjectSubCategories] DROP CONSTRAINT [FK_SubCategoryProjectSubCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectProjectSubCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ProjectSubCategories] DROP CONSTRAINT [FK_ProjectProjectSubCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_CategoryProjectCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ProjectCategories] DROP CONSTRAINT [FK_CategoryProjectCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectProjectCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ProjectCategories] DROP CONSTRAINT [FK_ProjectProjectCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_CategoryProjectPropertyCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ProjectPropertyCategories] DROP CONSTRAINT [FK_CategoryProjectPropertyCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectProjectProperty]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ProjectProperties] DROP CONSTRAINT [FK_ProjectProjectProperty];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectProgress]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Progresses] DROP CONSTRAINT [FK_ProjectProgress];
GO
IF OBJECT_ID(N'[dbo].[FK_IncentiveDonation]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Donations] DROP CONSTRAINT [FK_IncentiveDonation];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectDonation]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Donations] DROP CONSTRAINT [FK_ProjectDonation];
GO
IF OBJECT_ID(N'[dbo].[FK_PaymentTypeDonation]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Donations] DROP CONSTRAINT [FK_PaymentTypeDonation];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectQuestion]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Questions] DROP CONSTRAINT [FK_ProjectQuestion];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectPayout]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Payouts] DROP CONSTRAINT [FK_ProjectPayout];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectComment]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Comments] DROP CONSTRAINT [FK_ProjectComment];
GO
IF OBJECT_ID(N'[dbo].[FK_OrganisationPayout]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Payouts] DROP CONSTRAINT [FK_OrganisationPayout];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectReminder]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Reminders] DROP CONSTRAINT [FK_ProjectReminder];
GO
IF OBJECT_ID(N'[dbo].[FK_ProjectImages]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Images] DROP CONSTRAINT [FK_ProjectImages];
GO
IF OBJECT_ID(N'[dbo].[FK_CountryUser]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Users] DROP CONSTRAINT [FK_CountryUser];
GO
IF OBJECT_ID(N'[dbo].[FK_UserDonation]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Donations] DROP CONSTRAINT [FK_UserDonation];
GO
IF OBJECT_ID(N'[dbo].[FK_UserComment]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Comments] DROP CONSTRAINT [FK_UserComment];
GO
IF OBJECT_ID(N'[dbo].[FK_UserQuestion]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Questions] DROP CONSTRAINT [FK_UserQuestion];
GO
IF OBJECT_ID(N'[dbo].[FK_UserReminder]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Reminders] DROP CONSTRAINT [FK_UserReminder];
GO
IF OBJECT_ID(N'[dbo].[FK_AccountTypeUserAccountType]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[UserAccountTypes] DROP CONSTRAINT [FK_AccountTypeUserAccountType];
GO
IF OBJECT_ID(N'[dbo].[FK_UserUserAccountType]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[UserAccountTypes] DROP CONSTRAINT [FK_UserUserAccountType];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO
IF OBJECT_ID(N'[dbo].[Projects]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Projects];
GO
IF OBJECT_ID(N'[dbo].[Incentives]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Incentives];
GO
IF OBJECT_ID(N'[dbo].[Progresses]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Progresses];
GO
IF OBJECT_ID(N'[dbo].[ProjectProperties]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ProjectProperties];
GO
IF OBJECT_ID(N'[dbo].[Donations]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Donations];
GO
IF OBJECT_ID(N'[dbo].[PaymentTypes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PaymentTypes];
GO
IF OBJECT_ID(N'[dbo].[Payouts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Payouts];
GO
IF OBJECT_ID(N'[dbo].[Categories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Categories];
GO
IF OBJECT_ID(N'[dbo].[ProjectCategories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ProjectCategories];
GO
IF OBJECT_ID(N'[dbo].[Countries]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Countries];
GO
IF OBJECT_ID(N'[dbo].[FAQs]', 'U') IS NOT NULL
    DROP TABLE [dbo].[FAQs];
GO
IF OBJECT_ID(N'[dbo].[SubCategories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SubCategories];
GO
IF OBJECT_ID(N'[dbo].[ProjectSubCategories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ProjectSubCategories];
GO
IF OBJECT_ID(N'[dbo].[ProjectPropertyCategories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ProjectPropertyCategories];
GO
IF OBJECT_ID(N'[dbo].[Admins]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Admins];
GO
IF OBJECT_ID(N'[dbo].[Comments]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Comments];
GO
IF OBJECT_ID(N'[dbo].[Questions]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Questions];
GO
IF OBJECT_ID(N'[dbo].[Reminders]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Reminders];
GO
IF OBJECT_ID(N'[dbo].[Images]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Images];
GO
IF OBJECT_ID(N'[dbo].[Audits]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Audits];
GO
IF OBJECT_ID(N'[dbo].[AccountTypes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AccountTypes];
GO
IF OBJECT_ID(N'[dbo].[UserAccountTypes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UserAccountTypes];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [Icon] varbinary(max)  NULL,
    [OrgCode] nvarchar(50)  NULL,
    [Address] nvarchar(250)  NULL,
    [Phone] nvarchar(250)  NULL,
    [Email] nvarchar(250)  NOT NULL,
    [Password] nvarchar(250)  NULL,
    [LoginType] nvarchar(250)  NOT NULL,
    [LoginCode] nvarchar(250)  NULL,
    [ContactPerson] nvarchar(250)  NULL,
    [Bank] nvarchar(250)  NULL,
    [AccountNumber] nvarchar(250)  NULL,
    [AccountName] nvarchar(250)  NULL,
    [SwiftCode] nvarchar(250)  NULL,
    [SortCode] nvarchar(250)  NULL,
    [Currency] nvarchar(250)  NULL,
    [Created] datetime  NOT NULL,
    [Status] nvarchar(250)  NOT NULL,
    [IsActive] bit  NOT NULL,
    [ActivationCode] nvarchar(250)  NOT NULL,
    [CountryId] int  NOT NULL
);
GO

-- Creating table 'Projects'
CREATE TABLE [dbo].[Projects] (
    [Id] bigint IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL,
    [ShortDesc] nvarchar(max)  NULL,
    [Location] nvarchar(250)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [Target] nvarchar(250)  NOT NULL,
    [Duration] nvarchar(250)  NOT NULL,
    [Icon] varbinary(max)  NULL,
    [OrganisationId] int  NOT NULL,
    [Video] nvarchar(max)  NULL,
    [YouTube] nvarchar(max)  NULL
);
GO

-- Creating table 'Incentives'
CREATE TABLE [dbo].[Incentives] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [Qty] int  NULL,
    [EstimatedDeliveryTime] nvarchar(250)  NULL,
    [ProjectId] bigint  NOT NULL,
    [DeliveryLocation] nvarchar(max)  NULL
);
GO

-- Creating table 'Progresses'
CREATE TABLE [dbo].[Progresses] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [Implimented] datetime  NOT NULL,
    [Created] datetime  NOT NULL,
    [ProjectId] bigint  NOT NULL
);
GO

-- Creating table 'ProjectProperties'
CREATE TABLE [dbo].[ProjectProperties] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Key] nvarchar(250)  NOT NULL,
    [Value] nvarchar(max)  NOT NULL,
    [ProjectId] bigint  NOT NULL
);
GO

-- Creating table 'Donations'
CREATE TABLE [dbo].[Donations] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Created] datetime  NOT NULL,
    [Amount] decimal(18,2)  NOT NULL,
    [DonanationType] nvarchar(250)  NOT NULL,
    [TransNo] nvarchar(250)  NOT NULL,
    [IncentiveId] int  NOT NULL,
    [ProjectId] bigint  NOT NULL,
    [PaymentTypeId] int  NOT NULL,
    [UserId] int  NOT NULL
);
GO

-- Creating table 'PaymentTypes'
CREATE TABLE [dbo].[PaymentTypes] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [Icon] varbinary(max)  NULL
);
GO

-- Creating table 'Payouts'
CREATE TABLE [dbo].[Payouts] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Created] datetime  NOT NULL,
    [Amount] decimal(18,2)  NOT NULL,
    [PayoutType] nvarchar(250)  NOT NULL,
    [TransNo] nvarchar(250)  NOT NULL,
    [ProjectId] bigint  NOT NULL,
    [OrganisationId] int  NOT NULL
);
GO

-- Creating table 'Categories'
CREATE TABLE [dbo].[Categories] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [Icon] varbinary(max)  NULL,
    [Color] nvarchar(50)  NULL
);
GO

-- Creating table 'ProjectCategories'
CREATE TABLE [dbo].[ProjectCategories] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [CategoryId] int  NOT NULL,
    [ProjectId] bigint  NOT NULL
);
GO

-- Creating table 'Countries'
CREATE TABLE [dbo].[Countries] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL,
    [Icon] varbinary(max)  NULL
);
GO

-- Creating table 'FAQs'
CREATE TABLE [dbo].[FAQs] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Question] nvarchar(max)  NOT NULL,
    [Answer] nvarchar(max)  NOT NULL,
    [Created] datetime  NULL
);
GO

-- Creating table 'SubCategories'
CREATE TABLE [dbo].[SubCategories] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL,
    [Description] nvarchar(max)  NULL,
    [Icon] varbinary(max)  NULL,
    [Color] nvarchar(50)  NULL,
    [CategoryId] int  NOT NULL
);
GO

-- Creating table 'ProjectSubCategories'
CREATE TABLE [dbo].[ProjectSubCategories] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [SubCategoryId] int  NOT NULL,
    [ProjectId] bigint  NOT NULL
);
GO

-- Creating table 'ProjectPropertyCategories'
CREATE TABLE [dbo].[ProjectPropertyCategories] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [CategoryId] int  NOT NULL,
    [Key] nvarchar(250)  NOT NULL
);
GO

-- Creating table 'Admins'
CREATE TABLE [dbo].[Admins] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL,
    [Icon] varbinary(max)  NULL,
    [Address] nvarchar(250)  NOT NULL,
    [Phone] nvarchar(250)  NOT NULL,
    [Email] nvarchar(250)  NOT NULL,
    [Password] nvarchar(250)  NULL,
    [Created] datetime  NOT NULL,
    [Status] nvarchar(250)  NOT NULL,
    [IsActive] bit  NOT NULL,
    [ActivationCode] nvarchar(250)  NULL,
    [Type] nvarchar(250)  NOT NULL,
    [CreatedBy] nvarchar(250)  NOT NULL
);
GO

-- Creating table 'Comments'
CREATE TABLE [dbo].[Comments] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Item] nvarchar(max)  NOT NULL,
    [Created] datetime  NOT NULL,
    [ProjectId] bigint  NOT NULL,
    [UserId] int  NOT NULL
);
GO

-- Creating table 'Questions'
CREATE TABLE [dbo].[Questions] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Item] nvarchar(max)  NOT NULL,
    [Answer] nvarchar(max)  NOT NULL,
    [Created] datetime  NOT NULL,
    [ProjectId] bigint  NOT NULL,
    [UserId] int  NOT NULL
);
GO

-- Creating table 'Reminders'
CREATE TABLE [dbo].[Reminders] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Created] datetime  NOT NULL,
    [IsActive] bit  NOT NULL,
    [FinalDate] datetime  NOT NULL,
    [ProjectId] bigint  NOT NULL,
    [UserId] int  NOT NULL
);
GO

-- Creating table 'Images'
CREATE TABLE [dbo].[Images] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [URL] nvarchar(max)  NULL,
    [ProjectId] bigint  NOT NULL
);
GO

-- Creating table 'Audits'
CREATE TABLE [dbo].[Audits] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [ItemID] nvarchar(250)  NOT NULL,
    [Entity] nvarchar(250)  NOT NULL,
    [Action] nvarchar(250)  NOT NULL,
    [Performedby] nvarchar(250)  NOT NULL,
    [Created] datetime  NOT NULL,
    [OldValue] nvarchar(max)  NULL,
    [NewValue] nvarchar(max)  NOT NULL,
    [IP] nvarchar(250)  NULL
);
GO

-- Creating table 'AccountTypes'
CREATE TABLE [dbo].[AccountTypes] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(250)  NOT NULL
);
GO

-- Creating table 'UserAccountTypes'
CREATE TABLE [dbo].[UserAccountTypes] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [AccountTypeId] int  NOT NULL,
    [UserId] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Projects'
ALTER TABLE [dbo].[Projects]
ADD CONSTRAINT [PK_Projects]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Incentives'
ALTER TABLE [dbo].[Incentives]
ADD CONSTRAINT [PK_Incentives]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Progresses'
ALTER TABLE [dbo].[Progresses]
ADD CONSTRAINT [PK_Progresses]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ProjectProperties'
ALTER TABLE [dbo].[ProjectProperties]
ADD CONSTRAINT [PK_ProjectProperties]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Donations'
ALTER TABLE [dbo].[Donations]
ADD CONSTRAINT [PK_Donations]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PaymentTypes'
ALTER TABLE [dbo].[PaymentTypes]
ADD CONSTRAINT [PK_PaymentTypes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Payouts'
ALTER TABLE [dbo].[Payouts]
ADD CONSTRAINT [PK_Payouts]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Categories'
ALTER TABLE [dbo].[Categories]
ADD CONSTRAINT [PK_Categories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ProjectCategories'
ALTER TABLE [dbo].[ProjectCategories]
ADD CONSTRAINT [PK_ProjectCategories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Countries'
ALTER TABLE [dbo].[Countries]
ADD CONSTRAINT [PK_Countries]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'FAQs'
ALTER TABLE [dbo].[FAQs]
ADD CONSTRAINT [PK_FAQs]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'SubCategories'
ALTER TABLE [dbo].[SubCategories]
ADD CONSTRAINT [PK_SubCategories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ProjectSubCategories'
ALTER TABLE [dbo].[ProjectSubCategories]
ADD CONSTRAINT [PK_ProjectSubCategories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'ProjectPropertyCategories'
ALTER TABLE [dbo].[ProjectPropertyCategories]
ADD CONSTRAINT [PK_ProjectPropertyCategories]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Admins'
ALTER TABLE [dbo].[Admins]
ADD CONSTRAINT [PK_Admins]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Comments'
ALTER TABLE [dbo].[Comments]
ADD CONSTRAINT [PK_Comments]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Questions'
ALTER TABLE [dbo].[Questions]
ADD CONSTRAINT [PK_Questions]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Reminders'
ALTER TABLE [dbo].[Reminders]
ADD CONSTRAINT [PK_Reminders]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Images'
ALTER TABLE [dbo].[Images]
ADD CONSTRAINT [PK_Images]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Audits'
ALTER TABLE [dbo].[Audits]
ADD CONSTRAINT [PK_Audits]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'AccountTypes'
ALTER TABLE [dbo].[AccountTypes]
ADD CONSTRAINT [PK_AccountTypes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'UserAccountTypes'
ALTER TABLE [dbo].[UserAccountTypes]
ADD CONSTRAINT [PK_UserAccountTypes]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [OrganisationId] in table 'Projects'
ALTER TABLE [dbo].[Projects]
ADD CONSTRAINT [FK_OrganisationProject]
    FOREIGN KEY ([OrganisationId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_OrganisationProject'
CREATE INDEX [IX_FK_OrganisationProject]
ON [dbo].[Projects]
    ([OrganisationId]);
GO

-- Creating foreign key on [ProjectId] in table 'Incentives'
ALTER TABLE [dbo].[Incentives]
ADD CONSTRAINT [FK_ProjectIncentive]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectIncentive'
CREATE INDEX [IX_FK_ProjectIncentive]
ON [dbo].[Incentives]
    ([ProjectId]);
GO

-- Creating foreign key on [SubCategoryId] in table 'ProjectSubCategories'
ALTER TABLE [dbo].[ProjectSubCategories]
ADD CONSTRAINT [FK_SubCategoryProjectSubCategory]
    FOREIGN KEY ([SubCategoryId])
    REFERENCES [dbo].[SubCategories]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SubCategoryProjectSubCategory'
CREATE INDEX [IX_FK_SubCategoryProjectSubCategory]
ON [dbo].[ProjectSubCategories]
    ([SubCategoryId]);
GO

-- Creating foreign key on [ProjectId] in table 'ProjectSubCategories'
ALTER TABLE [dbo].[ProjectSubCategories]
ADD CONSTRAINT [FK_ProjectProjectSubCategory]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectProjectSubCategory'
CREATE INDEX [IX_FK_ProjectProjectSubCategory]
ON [dbo].[ProjectSubCategories]
    ([ProjectId]);
GO

-- Creating foreign key on [CategoryId] in table 'ProjectCategories'
ALTER TABLE [dbo].[ProjectCategories]
ADD CONSTRAINT [FK_CategoryProjectCategory]
    FOREIGN KEY ([CategoryId])
    REFERENCES [dbo].[Categories]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CategoryProjectCategory'
CREATE INDEX [IX_FK_CategoryProjectCategory]
ON [dbo].[ProjectCategories]
    ([CategoryId]);
GO

-- Creating foreign key on [ProjectId] in table 'ProjectCategories'
ALTER TABLE [dbo].[ProjectCategories]
ADD CONSTRAINT [FK_ProjectProjectCategory]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectProjectCategory'
CREATE INDEX [IX_FK_ProjectProjectCategory]
ON [dbo].[ProjectCategories]
    ([ProjectId]);
GO

-- Creating foreign key on [CategoryId] in table 'ProjectPropertyCategories'
ALTER TABLE [dbo].[ProjectPropertyCategories]
ADD CONSTRAINT [FK_CategoryProjectPropertyCategory]
    FOREIGN KEY ([CategoryId])
    REFERENCES [dbo].[Categories]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CategoryProjectPropertyCategory'
CREATE INDEX [IX_FK_CategoryProjectPropertyCategory]
ON [dbo].[ProjectPropertyCategories]
    ([CategoryId]);
GO

-- Creating foreign key on [ProjectId] in table 'ProjectProperties'
ALTER TABLE [dbo].[ProjectProperties]
ADD CONSTRAINT [FK_ProjectProjectProperty]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectProjectProperty'
CREATE INDEX [IX_FK_ProjectProjectProperty]
ON [dbo].[ProjectProperties]
    ([ProjectId]);
GO

-- Creating foreign key on [ProjectId] in table 'Progresses'
ALTER TABLE [dbo].[Progresses]
ADD CONSTRAINT [FK_ProjectProgress]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectProgress'
CREATE INDEX [IX_FK_ProjectProgress]
ON [dbo].[Progresses]
    ([ProjectId]);
GO

-- Creating foreign key on [IncentiveId] in table 'Donations'
ALTER TABLE [dbo].[Donations]
ADD CONSTRAINT [FK_IncentiveDonation]
    FOREIGN KEY ([IncentiveId])
    REFERENCES [dbo].[Incentives]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_IncentiveDonation'
CREATE INDEX [IX_FK_IncentiveDonation]
ON [dbo].[Donations]
    ([IncentiveId]);
GO

-- Creating foreign key on [ProjectId] in table 'Donations'
ALTER TABLE [dbo].[Donations]
ADD CONSTRAINT [FK_ProjectDonation]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectDonation'
CREATE INDEX [IX_FK_ProjectDonation]
ON [dbo].[Donations]
    ([ProjectId]);
GO

-- Creating foreign key on [PaymentTypeId] in table 'Donations'
ALTER TABLE [dbo].[Donations]
ADD CONSTRAINT [FK_PaymentTypeDonation]
    FOREIGN KEY ([PaymentTypeId])
    REFERENCES [dbo].[PaymentTypes]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PaymentTypeDonation'
CREATE INDEX [IX_FK_PaymentTypeDonation]
ON [dbo].[Donations]
    ([PaymentTypeId]);
GO

-- Creating foreign key on [ProjectId] in table 'Questions'
ALTER TABLE [dbo].[Questions]
ADD CONSTRAINT [FK_ProjectQuestion]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectQuestion'
CREATE INDEX [IX_FK_ProjectQuestion]
ON [dbo].[Questions]
    ([ProjectId]);
GO

-- Creating foreign key on [ProjectId] in table 'Payouts'
ALTER TABLE [dbo].[Payouts]
ADD CONSTRAINT [FK_ProjectPayout]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectPayout'
CREATE INDEX [IX_FK_ProjectPayout]
ON [dbo].[Payouts]
    ([ProjectId]);
GO

-- Creating foreign key on [ProjectId] in table 'Comments'
ALTER TABLE [dbo].[Comments]
ADD CONSTRAINT [FK_ProjectComment]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectComment'
CREATE INDEX [IX_FK_ProjectComment]
ON [dbo].[Comments]
    ([ProjectId]);
GO

-- Creating foreign key on [OrganisationId] in table 'Payouts'
ALTER TABLE [dbo].[Payouts]
ADD CONSTRAINT [FK_OrganisationPayout]
    FOREIGN KEY ([OrganisationId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_OrganisationPayout'
CREATE INDEX [IX_FK_OrganisationPayout]
ON [dbo].[Payouts]
    ([OrganisationId]);
GO

-- Creating foreign key on [ProjectId] in table 'Reminders'
ALTER TABLE [dbo].[Reminders]
ADD CONSTRAINT [FK_ProjectReminder]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectReminder'
CREATE INDEX [IX_FK_ProjectReminder]
ON [dbo].[Reminders]
    ([ProjectId]);
GO

-- Creating foreign key on [ProjectId] in table 'Images'
ALTER TABLE [dbo].[Images]
ADD CONSTRAINT [FK_ProjectImages]
    FOREIGN KEY ([ProjectId])
    REFERENCES [dbo].[Projects]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProjectImages'
CREATE INDEX [IX_FK_ProjectImages]
ON [dbo].[Images]
    ([ProjectId]);
GO

-- Creating foreign key on [CountryId] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [FK_CountryUser]
    FOREIGN KEY ([CountryId])
    REFERENCES [dbo].[Countries]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CountryUser'
CREATE INDEX [IX_FK_CountryUser]
ON [dbo].[Users]
    ([CountryId]);
GO

-- Creating foreign key on [UserId] in table 'Donations'
ALTER TABLE [dbo].[Donations]
ADD CONSTRAINT [FK_UserDonation]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserDonation'
CREATE INDEX [IX_FK_UserDonation]
ON [dbo].[Donations]
    ([UserId]);
GO

-- Creating foreign key on [UserId] in table 'Comments'
ALTER TABLE [dbo].[Comments]
ADD CONSTRAINT [FK_UserComment]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserComment'
CREATE INDEX [IX_FK_UserComment]
ON [dbo].[Comments]
    ([UserId]);
GO

-- Creating foreign key on [UserId] in table 'Questions'
ALTER TABLE [dbo].[Questions]
ADD CONSTRAINT [FK_UserQuestion]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserQuestion'
CREATE INDEX [IX_FK_UserQuestion]
ON [dbo].[Questions]
    ([UserId]);
GO

-- Creating foreign key on [UserId] in table 'Reminders'
ALTER TABLE [dbo].[Reminders]
ADD CONSTRAINT [FK_UserReminder]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserReminder'
CREATE INDEX [IX_FK_UserReminder]
ON [dbo].[Reminders]
    ([UserId]);
GO

-- Creating foreign key on [AccountTypeId] in table 'UserAccountTypes'
ALTER TABLE [dbo].[UserAccountTypes]
ADD CONSTRAINT [FK_AccountTypeUserAccountType]
    FOREIGN KEY ([AccountTypeId])
    REFERENCES [dbo].[AccountTypes]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AccountTypeUserAccountType'
CREATE INDEX [IX_FK_AccountTypeUserAccountType]
ON [dbo].[UserAccountTypes]
    ([AccountTypeId]);
GO

-- Creating foreign key on [UserId] in table 'UserAccountTypes'
ALTER TABLE [dbo].[UserAccountTypes]
ADD CONSTRAINT [FK_UserUserAccountType]
    FOREIGN KEY ([UserId])
    REFERENCES [dbo].[Users]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserUserAccountType'
CREATE INDEX [IX_FK_UserUserAccountType]
ON [dbo].[UserAccountTypes]
    ([UserId]);
GO

-- Creating foreign key on [CategoryId] in table 'SubCategories'
ALTER TABLE [dbo].[SubCategories]
ADD CONSTRAINT [FK_CategorySubCategory]
    FOREIGN KEY ([CategoryId])
    REFERENCES [dbo].[Categories]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CategorySubCategory'
CREATE INDEX [IX_FK_CategorySubCategory]
ON [dbo].[SubCategories]
    ([CategoryId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------