import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeDestinationsFields {
  slug: EntryFieldTypes.Symbol;
}

export type TypeDestinationsSkeleton = EntrySkeletonType<
  TypeDestinationsFields,
  "destinations"
>;
export type TypeDestinations<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeDestinationsSkeleton, Modifiers, Locales>;
