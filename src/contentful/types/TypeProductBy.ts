import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProductByFields {
  name: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
}

export type TypeProductBySkeleton = EntrySkeletonType<
  TypeProductByFields,
  "productBy"
>;
export type TypeProductBy<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProductBySkeleton, Modifiers, Locales>;
