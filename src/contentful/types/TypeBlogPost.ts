import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

interface Author {
  fields?: {
    name?: string;
    image?: {
      fields?: {
        file?: {
          url?: string;
        };
      };
    };
  };
}

export interface TypeBlogPostFields {
  title?: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.RichText;
  image?: EntryFieldTypes.AssetLink;
  author?: EntrySkeletonType<Author, "author"> | null;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
