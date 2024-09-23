import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const moreSugarRegular = localFont({
  src: "./fonts/MoreSugar-Regular.otf",
  variable: "--font-more-sugar",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Jellybeans",
  description: "An onchain prediction game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${moreSugarRegular.variable} bg-background antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
