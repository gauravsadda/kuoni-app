import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeHeroBannerFields {
  banner?: EntryFieldTypes.Symbol;
}

export type TypeHeroBannerSkeleton = EntrySkeletonType<
  TypeHeroBannerFields,
  "heroBanner"
>;
export type TypeHeroBanner<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHeroBannerSkeleton, Modifiers, Locales>;
