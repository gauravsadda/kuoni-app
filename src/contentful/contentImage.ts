import { Asset, AssetFields } from "contentful";
export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const parseContentfulContentImage = (
  asset?: Asset,
): ContentImage | null => {
  if (!asset) {
    return null;
  }

  if (!("fields" in asset)) {
    return null;
  }

  const fields = asset.fields as AssetFields;
  return {
    src: fields.file?.url || "",
    alt: fields.description || "",
    width: fields.file?.details.image?.width || 0,
    height: fields.file?.details.image?.height || 0,
  };
};
