import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeSeoFields {
  metaTitle: EntryFieldTypes.Symbol;
  metaDescription?: EntryFieldTypes.Text;
  canonicalUrl?: EntryFieldTypes.Symbol;
  ogTitle?: EntryFieldTypes.Symbol;
  ogImage?: EntryFieldTypes.AssetLink;
}

export type TypeSeoSkeleton = EntrySkeletonType<TypeSeoFields, "seo">;
export type TypeSeo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSeoSkeleton, Modifiers, Locales>;
