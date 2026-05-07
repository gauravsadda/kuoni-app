import { Typography } from "@mui/material";

const TileContainer = ({ content }: { content?: unknown }) => {
  console.log("TileContainer content:", content);
  return (
    <div>
      <Typography>
        This is the tile container. It will contain the tiles that will be
        displayed on the home page.
      </Typography>
    </div>
  );
};

export default TileContainer;
