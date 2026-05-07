import { client, previewClient } from "@/lib/contentful/contentfulClient";
import type { EntriesQueries, EntrySkeletonType } from "contentful";
import { draftMode } from "next/headers";

interface Param {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
}

const getClient = async () => {
  const draft = await draftMode();
  return draft.isEnabled ? previewClient : client;
};

export const getGlobalStory = async <T extends EntrySkeletonType>(
  params: Param,
) => {
  try {
    const langEnv = process.env.LANG_ENV;
    const contentful = await getClient();
    const res = await contentful.getEntries<T>({
      ...params,
      locale: langEnv,
    } as EntriesQueries<T, undefined>);

    return res.items;
  } catch (e) {
    console.error(e);
  }
};

export const getStory = async <T extends EntrySkeletonType>(
  slug: string,
  params: Param = {},
) => {
  try {
    const langEnv = process.env.LANG_ENV;
    const contentful = await getClient();
    const res = await contentful.getEntries<T>({
      ...params,
      "fields.slug": slug,
      locale: langEnv,
    } as EntriesQueries<T, undefined>);
    return res.items[0];
  } catch (e) {
    console.error(e);
  }
};

export const getStories = async <T extends EntrySkeletonType>(
  params: Param,
) => {
  try {
    const langEnv = process.env.LANG_ENV;
    const contentful = await getClient();
    const res = await contentful.getEntries<T>({
      ...params,
      locale: langEnv,
    } as EntriesQueries<T, undefined>);

    return res.items;
  } catch (e) {
    console.error(e);
  }
};
