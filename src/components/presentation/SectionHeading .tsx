import { Box, Divider, Typography } from "@mui/material";

type HeadingAlign = "left" | "center" | "right";
type HeadingVariant = "h2" | "h3" | "h4" | "h5" | "h6";
type DividerStyle = "underline" | "divider" | "dot" | "none";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  overline?: string;
  variant?: HeadingVariant;
  align?: HeadingAlign;
  divider?: DividerStyle;
  maxWidth?: string | number;
}

const DividerElement = ({
  style,
  align,
}: {
  style: DividerStyle;
  align: HeadingAlign;
}) => {
  const justifyMap: Record<HeadingAlign, string> = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  if (style === "none") return null;

  if (style === "divider") {
    return <Divider sx={{ mt: 2, mb: 0 }} />;
  }

  if (style === "underline") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: justifyMap[align],
          mt: 2,
        }}
      >
        <Box
          sx={{
            width: "48px",
            height: "2px",
            backgroundColor: "primary.main",
          }}
        />
      </Box>
    );
  }

  return null;
};

const SectionHeading = ({
  title,
  subtitle,
  overline,
  variant = "h2",
  align = "left",
  divider = "underline",
  maxWidth,
}: SectionHeadingProps) => {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: maxWidth ?? "100%",
        marginBottom: 4,
        ...(align === "center" && { mx: "auto" }),
      }}
    >
      {overline && (
        <Typography variant="overline" sx={{ display: "block", mb: 1 }}>
          {overline}
        </Typography>
      )}

      <Typography variant={variant}>{title}</Typography>

      <DividerElement style={divider} align={align} />

      {subtitle && (
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeading;
