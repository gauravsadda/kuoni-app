import "@/styles/global.scss";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { draftMode } from "next/headers";
// import ExitDraftModeLink from "@/components/common/ExitDraftModeLink";
import { Inter } from "next/font/google";
import CustomThemeProvider from "@/theme/ThemeProvider";
import Header from "@/components/presentation/global/header/Header";
import Footer from "@/components/presentation/global/footer/Footer";
import { ContentfulPreviewProvider } from "@/components/common/ContentfulPreviewProvider";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuoni App",
  description: "Kuoni App",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const draft = await draftMode();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={inter.className} suppressHydrationWarning>
        <CustomThemeProvider>
          {/* {draft.isEnabled && (
            <p className="bg-orange-200 py-4 px-[6vw]">
              Draft mode is on! <ExitDraftModeLink className="underline" />
            </p>
          )} */}
          <ContentfulPreviewProvider
            locale="en-US"
            enableInspectorMode
            enableLiveUpdates
            targetOrigin={process.env.NEXT_PUBLIC_CONTENTFUL_TARGET_URL}
          >
            <Header content="Kuoni" />
            {children}
            <Footer
              content={`© ${new Date().getFullYear()} Kuoni. All rights reserved.`}
            />
          </ContentfulPreviewProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
