import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeDescriptionFields {
  description?: EntryFieldTypes.RichText;
}

export type TypeDescriptionSkeleton = EntrySkeletonType<
  TypeDescriptionFields,
  "description"
>;
export type TypeDescription<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeDescriptionSkeleton, Modifiers, Locales>;
