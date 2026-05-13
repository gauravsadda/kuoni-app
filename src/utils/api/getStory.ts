import { cache } from "react";
import { client, previewClient } from "@/lib/contentful/contentfulClient";
import type { EntriesQueries, Entry, EntrySkeletonType } from "contentful";
import { draftMode } from "next/headers";
import { env } from "@/config/env";

interface Param {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
}

type WithoutUnresolvableLinks = "WITHOUT_UNRESOLVABLE_LINKS";

const isProduction = process.env.NODE_ENV === "production";

const getClient = async () => {
  try {
    const draft = await draftMode();
    return draft.isEnabled ? previewClient : client;
  } catch {
    return client;
  }
};

export const getGlobalStory = cache(
  async <T extends EntrySkeletonType>(
    params: Param,
  ): Promise<Entry<T, WithoutUnresolvableLinks>[] | undefined> => {
    try {
      const langEnv = env.LANG_ENV;
      const contentful = await getClient();
      const res = await contentful.getEntries<T>({
        ...params,
        locale: langEnv,
      } as EntriesQueries<T, undefined>);

      return res.items as Entry<T, WithoutUnresolvableLinks>[];
    } catch (e) {
      if (!isProduction) {
        console.error("Contentful fetch error:", e);
      }
    }
  },
);

export const getStory = cache(
  async <T extends EntrySkeletonType>(
    slug: string,
    params: Param = {},
  ): Promise<Entry<T, WithoutUnresolvableLinks> | undefined> => {
    try {
      const langEnv = env.LANG_ENV;
      const contentful = await getClient();
      const res = await contentful.getEntries<T>({
        ...params,
        "fields.slug": slug,
        locale: langEnv,
      } as EntriesQueries<T, undefined>);
      return res.items[0] as Entry<T, WithoutUnresolvableLinks> | undefined;
    } catch (e) {
      if (!isProduction) {
        console.error("Contentful fetch error:", e);
      }
    }
  },
);

export const getStories = cache(
  async <T extends EntrySkeletonType>(
    params: Param,
  ): Promise<Entry<T, WithoutUnresolvableLinks>[] | undefined> => {
    try {
      const langEnv = env.LANG_ENV;
      const contentful = await getClient();
      const res = await contentful.getEntries<T>({
        ...params,
        locale: langEnv,
      } as EntriesQueries<T, undefined>);

      return res.items as Entry<T, WithoutUnresolvableLinks>[];
    } catch (e) {
      if (!isProduction) {
        console.error("Contentful fetch error:", e);
      }
    }
  },
);
