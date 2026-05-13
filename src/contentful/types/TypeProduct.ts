import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeProductBySkeleton } from "./TypeProductBy";

export interface TypeProductFields {
  title: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  price?: EntryFieldTypes.Integer;
  currency?: EntryFieldTypes.Symbol;
  imageUrl?: EntryFieldTypes.Symbol;
  productBy: EntryFieldTypes.EntryLink<TypeProductBySkeleton>;
}

export type TypeProductSkeleton = EntrySkeletonType<
  TypeProductFields,
  "product"
>;
export type TypeProduct<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProductSkeleton, Modifiers, Locales>;
