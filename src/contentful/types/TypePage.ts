import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeBlogPostSkeleton } from "./TypeBlogPost";
import type { TypeDescriptionSkeleton } from "./TypeDescription";
import type { TypeHeroBannerSkeleton } from "./TypeHeroBanner";
import type { TypeSeoSkeleton } from "./TypeSeo";

export interface TypePageFields {
  title?: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  heroBanner?: EntryFieldTypes.EntryLink<TypeHeroBannerSkeleton>;
  description?: EntryFieldTypes.EntryLink<TypeDescriptionSkeleton>;
  body?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBlogPostSkeleton>>;
  seo?: EntryFieldTypes.EntryLink<TypeSeoSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePageSkeleton, Modifiers, Locales>;
