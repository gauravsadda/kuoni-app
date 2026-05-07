"use client";

import { Typography } from "@mui/material";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import type { ComponentType, ReactNode } from "react";
import type { Entry, EntrySkeletonType } from "contentful";
import authorable from "@/components/authorable";

type AuthorableComponentProps = {
  content: unknown;
  children?: ReactNode;
};

const ComponentsList: Record<
  string,
  ComponentType<AuthorableComponentProps>
> = {
  ...authorable,
};

type ComponentsProps = {
  entry: Entry<EntrySkeletonType, undefined, string>;
  children?: ReactNode;
};

const Components = ({ entry, children }: ComponentsProps) => {
  const updatedEntry = useContentfulLiveUpdates(entry);
  const contentTypeId = updatedEntry.sys?.contentType?.sys?.id;

  if (contentTypeId && ComponentsList[contentTypeId]) {
    const Component = ComponentsList[contentTypeId];

    return (
      <div data-contentful-entry-id={updatedEntry.sys.id}>
        <Component content={updatedEntry.fields} key={updatedEntry.sys.id}>
          {children}
        </Component>
      </div>
    );
  }

  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <Typography>
          The component {contentTypeId || "unknown"} has not been created yet.
        </Typography>
      )}
    </>
  );
};

export default Components;
