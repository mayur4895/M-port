import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { NextProvider } from "@/components/provider/next-ui-provider";

const font = Poppins({ weight:['300','400','500','600','700','800','900'],subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "created by mayur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextProvider>
                      {children}
        </NextProvider>
        </ThemeProvider>
        </body>
    </html>
  );
}

