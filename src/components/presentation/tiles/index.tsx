"use client";

import { Typography } from "@mui/material";
import { useContentfulInspectorMode } from "@contentful/live-preview/react";

type TileContainerProps = {
  entryId?: string;
  content?: unknown;
};

const TileContainer = ({ content, entryId }: TileContainerProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId });
  console.log("TileContainer content:", content);
  return (
    <div {...inspectorProps({ fieldId: "tiles" })}>
      <Typography>
        This is the tile container. It will contain the tiles that will be
        displayed on the home page.
      </Typography>
    </div>
  );
};

export default TileContainer;
