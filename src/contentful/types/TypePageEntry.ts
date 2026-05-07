import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePageEntryFields {
  title?: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  heroBanner?: EntryFieldTypes.EntryLink<
    EntrySkeletonType<Record<string, EntryFieldTypes.Object>, "heroBanner">
  >;
  description?: EntryFieldTypes.EntryLink<
    EntrySkeletonType<Record<string, EntryFieldTypes.Object>, "description">
  >;
  body?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      EntrySkeletonType<Record<string, EntryFieldTypes.Object>, "body">
    >
  >;
}

export type TypePageEntrySkeleton = EntrySkeletonType<
  TypePageEntryFields,
  "page"
>;
export type TypePageEntry<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypePageEntrySkeleton, Modifiers, Locales>;
