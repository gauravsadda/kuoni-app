import { client, previewClient } from "@/lib/contentful/contentfulClient";
import type { EntriesQueries, EntrySkeletonType } from "contentful";
import { draftMode } from "next/headers";
import { env } from "@/config/env";

interface Param {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
}

const isProduction = process.env.NODE_ENV === "production";

const getClient = async () => {
  try {
    const draft = await draftMode();
    return draft.isEnabled ? previewClient : client;
  } catch {
    return client;
  }
};

export const getGlobalStory = async <T extends EntrySkeletonType>(
  params: Param,
) => {
  try {
    const langEnv = env.LANG_ENV;
    const contentful = await getClient();
    const res = await contentful.getEntries<T>({
      ...params,
      locale: langEnv,
    } as EntriesQueries<T, undefined>);

    return res.items;
  } catch (e) {
    if (!isProduction) {
      console.error("Contentful fetch error:", e);
    }
  }
};

export const getStory = async <T extends EntrySkeletonType>(
  slug: string,
  params: Param = {},
) => {
  try {
    const langEnv = env.LANG_ENV;
    const contentful = await getClient();
    const res = await contentful.getEntries<T>({
      ...params,
      "fields.slug": slug,
      locale: langEnv,
    } as EntriesQueries<T, undefined>);
    return res.items[0];
  } catch (e) {
    if (!isProduction) {
      console.error("Contentful fetch error:", e);
    }
  }
};

export const getStories = async <T extends EntrySkeletonType>(
  params: Param,
) => {
  try {
    const langEnv = env.LANG_ENV;
    const contentful = await getClient();
    const res = await contentful.getEntries<T>({
      ...params,
      locale: langEnv,
    } as EntriesQueries<T, undefined>);

    return res.items;
  } catch (e) {
    if (!isProduction) {
      console.error("Contentful fetch error:", e);
    }
  }
};
