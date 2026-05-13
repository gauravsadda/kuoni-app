// Contentful migration: creates the `seo` content model and links it from `page`.
// Run with: npx contentful-migration --space-id $CONTENTFUL_SPACE_ID --management-token $CONTENTFUL_MANAGEMENT_TOKEN migrations/0001-create-seo-content-model.ts

module.exports = function (migration) {
  const seo = migration
    .createContentType("seo")
    .name("SEO")
    .description("SEO and social sharing metadata for a page")
    .displayField("metaTitle");

  seo
    .createField("metaTitle")
    .name("Meta Title")
    .type("Symbol")
    .required(true)
    .validations([{ size: { max: 70 } }]);

  seo
    .createField("metaDescription")
    .name("Meta Description")
    .type("Text")
    .validations([{ size: { max: 160 } }]);

  seo
    .createField("canonicalUrl")
    .name("Canonical URL")
    .type("Symbol")
    .validations([
      {
        regexp: {
          pattern: "^((https?:\\/\\/[^\\s]+)|(\\/[^\\s]*))$",
        },
        message:
          "Must be an absolute URL (https://...) or a root-relative path (/...)",
      },
    ]);

  seo.createField("ogTitle").name("OpenGraph Title").type("Symbol");

  seo
    .createField("ogImage")
    .name("OpenGraph Image")
    .type("Link")
    .linkType("Asset")
    .validations([{ linkMimetypeGroup: ["image"] }]);

  const page = migration.editContentType("page");

  page
    .createField("seo")
    .name("SEO")
    .type("Link")
    .linkType("Entry")
    .validations([{ linkContentType: ["seo"] }]);
};
