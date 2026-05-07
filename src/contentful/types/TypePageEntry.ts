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
  heroBanner?: EntrySkeletonType<
    Record<string, EntryFieldTypes.Object>,
    "heroBanner"
  > | null;
  description?: EntrySkeletonType<
    Record<string, EntryFieldTypes.Object>,
    "description"
  > | null;
  body?: Array<
    EntrySkeletonType<Record<string, EntryFieldTypes.Object>, "body">
  > | null;
}

export type TypePageEntrySkeleton = EntrySkeletonType<
  TypePageEntryFields,
  "page"
>;
export type TypePageEntry<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypePageEntrySkeleton, Modifiers, Locales>;
