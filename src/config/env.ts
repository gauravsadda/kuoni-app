const requiredEnvVariables = [
  "CONTENTFUL_SPACE_ID",
  "CONTENTFUL_ACCESS_TOKEN",
  "CONTENTFUL_PREVIEW_ACCESS_TOKEN",
  "CONTENTFUL_MANAGEMENT_TOKEN",
  "CONTENTFUL_PREVIEW_SECRET",
];

if (process.env.NODE_ENV === "production") {
  requiredEnvVariables.push("NEXT_PUBLIC_SITE_URL");
}

requiredEnvVariables.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
});

export const env = {
  CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID as string,

  CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN as string,

  CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env
    .CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,

  CONTENTFUL_MANAGEMENT_TOKEN: process.env
    .CONTENTFUL_MANAGEMENT_TOKEN as string,

  CONTENTFUL_PREVIEW_SECRET: process.env.CONTENTFUL_PREVIEW_SECRET as string,

  LANG_ENV: process.env.LANG_ENV || "en-US",

  NODE_ENV: process.env.NODE_ENV || "development",

  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || "http://localhost:3000",

  NEXT_PUBLIC_CONTENTFUL_TARGET_URL:
    process.env.NEXT_PUBLIC_CONTENTFUL_TARGET_URL ||
    "https://app.contentful.com",

  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || "Kuoni App",

  NEXT_PUBLIC_SITE_DESCRIPTION:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Luxury travel experiences curated by Kuoni.",
};
