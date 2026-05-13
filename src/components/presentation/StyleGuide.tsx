"use client";

import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ArrowForward,
  Delete,
  Download,
  Save,
  Send,
} from "@mui/icons-material";
import SectionHeading from "./SectionHeading ";
import SectionWrapper from "./SectionWrapper";

const sections = [
  {
    label: "Display — h1 to h6",
    items: [
      { variant: "h1", text: "Heading one" },
      { variant: "h2", text: "Heading two" },
      { variant: "h3", text: "Heading three" },
      { variant: "h4", text: "Heading four" },
      { variant: "h5", text: "Heading five" },
      { variant: "h6", text: "Heading six" },
    ],
  },
  {
    label: "Subtitle",
    items: [
      {
        variant: "subtitle1",
        text: "Subtitle one — larger introductory text for sections",
      },
      { variant: "subtitle2", text: "Subtitle two — uppercase label style" },
    ],
  },
  {
    label: "Body",
    items: [
      {
        variant: "body1",
        text: "Body one — the main reading text. Used for paragraphs, descriptions, and content blocks throughout the interface.",
      },
      {
        variant: "body2",
        text: "Body two — slightly smaller body text. Ideal for secondary content, sidebars, and supporting copy.",
      },
    ],
  },
  {
    label: "Utility",
    items: [
      {
        variant: "caption",
        text: "Caption — used for image captions, timestamps, and helper text",
      },
      { variant: "overline", text: "Overline — section marker" },
      { variant: "button", text: "Button text style" },
    ],
  },
] as const;

const scaleFactors = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12];

const StyleGuide = () => {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Typography variant="h4" component="h3" sx={{ mt: 4 }}>
          Buttons
        </Typography>
        {/* ── Contained ── */}
        <Typography
          variant="subtitle2"
          sx={{
            mt: 3,
            mb: 1,
            color: "text.secondary",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontSize: 11,
          }}
        >
          Contained
        </Typography>
        <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="primary" disabled>
            Disabled
          </Button>
        </Stack>
        {/* ── Outlined ── */}
        <Typography
          variant="subtitle2"
          sx={{
            mt: 3,
            mb: 1,
            color: "text.secondary",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontSize: 11,
          }}
        >
          Outlined
        </Typography>
        <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="primary" disabled>
            Disabled
          </Button>
        </Stack>
        {/* ── Text ── */}
        <Typography
          variant="subtitle2"
          sx={{
            mt: 3,
            mb: 1,
            color: "text.secondary",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontSize: 11,
          }}
        >
          Text
        </Typography>
        <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="primary" disabled>
            Disabled
          </Button>
        </Stack>
        {/* ── Sizes ── */}
        <Typography
          variant="subtitle2"
          sx={{
            mt: 3,
            mb: 1,
            color: "text.secondary",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontSize: 11,
          }}
        >
          Sizes
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: 2, flexWrap: "wrap", alignItems: "center" }}
        >
          <Button variant="contained" color="primary" size="small">
            Small
          </Button>
          <Button variant="contained" color="primary" size="medium">
            Medium
          </Button>
          <Button variant="contained" color="primary" size="large">
            Large
          </Button>
          <Button variant="outlined" color="primary" size="small">
            Small
          </Button>
          <Button variant="outlined" color="primary" size="medium">
            Medium
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Large
          </Button>
        </Stack>
        {/* ── With Icons ── */}
        <Typography
          variant="subtitle2"
          sx={{
            mt: 3,
            mb: 1,
            color: "text.secondary",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontSize: 11,
          }}
        >
          With icons
        </Typography>
        <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" color="primary" startIcon={<Send />}>
            Send
          </Button>
          <Button variant="outlined" color="primary" endIcon={<ArrowForward />}>
            Next
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Download />}
          >
            Download
          </Button>
          <Button variant="outlined" color="error" startIcon={<Delete />}>
            Delete
          </Button>
        </Stack>
        {/* ── Loading ── */}
        <Typography
          variant="subtitle2"
          sx={{
            mt: 3,
            mb: 1,
            color: "text.secondary",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontSize: 11,
          }}
        >
          Loading
        </Typography>
        <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" color="primary" loading>
            Loading
          </Button>
          <Button variant="outlined" color="primary" loading>
            Loading
          </Button>
          <Button
            variant="contained"
            color="primary"
            loading
            loadingPosition="start"
            startIcon={<Save />}
          >
            Saving
          </Button>
          <Button
            variant="contained"
            color="primary"
            loading
            loadingPosition="end"
            endIcon={<Send />}
          >
            Sending
          </Button>
        </Stack>
        {/* ── Full Width ── */}
        <Typography
          variant="subtitle2"
          sx={{
            mt: 3,
            mb: 1,
            color: "text.secondary",
            letterSpacing: 1.5,
            textTransform: "uppercase",
            fontSize: 11,
          }}
        >
          Full width
        </Typography>
        <Stack direction="column" sx={{ gap: 2 }}>
          <Button variant="contained" color="primary" fullWidth>
            Full width contained
          </Button>
          <Button variant="outlined" color="primary" fullWidth>
            Full width outlined
          </Button>
        </Stack>
        <Box sx={{ py: 6 }}>
          <Typography variant="overline" sx={{ mb: 1, display: "block" }}>
            Design system
          </Typography>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Typography
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 6 }}>
            All variants from your MUI theme in one place.
          </Typography>

          <Stack spacing={4} divider={<Divider />}>
            {sections.map((section) => (
              <Box key={section.label}>
                <Typography variant="subtitle2" sx={{ mb: 3 }}>
                  {section.label}
                </Typography>

                <Stack spacing={3}>
                  {section.items.map(({ variant, text }) => (
                    <Box
                      key={variant}
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 3,
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          minWidth: 80,
                          color: "text.disabled",
                          flexShrink: 0,
                          fontFamily: "monospace",
                        }}
                      >
                        {variant}
                      </Typography>
                      <Typography variant={variant}>{text}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box sx={{ py: 6 }}>
          <Typography variant="overline">Design system</Typography>
          <Typography variant="h3" sx={{ mt: 1, mb: 1 }}>
            Spacing
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 6 }}>
            spacing(factor) = factor × 8px
          </Typography>

          <Divider sx={{ mb: 4 }} />
          <Typography variant="subtitle2" sx={{ mb: 3 }}>
            Common scale
          </Typography>

          <Stack spacing={2} sx={{ mb: 6 }}>
            {scaleFactors.map((f) => (
              <Box
                key={f}
                sx={{ display: "flex", alignItems: "center", gap: 3 }}
              >
                <Typography
                  variant="caption"
                  sx={{ minWidth: 120, fontFamily: "monospace" }}
                >
                  spacing({f})
                </Typography>
                <Box
                  sx={{
                    height: 24,
                    width: theme.spacing(f),
                    backgroundColor: "primary.main",
                    borderRadius: "2px",
                    transition: "width 0.2s",
                  }}
                />
                <Typography variant="caption">{theme.spacing(f)}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
        {/* Default */}
        <Stack direction="row" sx={{ gap: 2, flexWrap: "wrap", mb: 4 }}>
          <Link href="/about">About Us</Link>

          {/* Colors */}
          <Link href="/contact" color="primary">
            Contact
          </Link>
          <Link href="/blog" color="secondary">
            Blog
          </Link>

          {/* Underline variants */}
          <Link href="/" underline="always">
            Always underlined
          </Link>
          <Link href="/" underline="hover">
            Underline on hover
          </Link>
          <Link href="/" underline="none">
            No underline
          </Link>
          <Link component={NextLink} href="/services" color="primary">
            Our Services
          </Link>
        </Stack>
      </Container>
      {/* Basic */}
      <SectionWrapper background="lightGreyOne">
        <SectionHeading
          title="Why Choose Us"
          overline="About"
          subtitle="We deliver exceptional results with a focus on quality and innovation."
          variant="h3"
          align="center"
        />
      </SectionWrapper>

      {/* // Background color */}
      <SectionWrapper background="transparent" spacing={5}>
        <SectionHeading title="Latest News" variant="h4" divider="divider" />
      </SectionWrapper>

      {/* // Custom hex background */}
      <SectionWrapper background="lightBlueGrey" spacing={8} maxWidth="md">
        <SectionHeading title="About Us" />
      </SectionWrapper>
    </>
  );
};

export default StyleGuide;
