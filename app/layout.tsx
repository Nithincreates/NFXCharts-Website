import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFXCharts | Intraday Futures Education",
  description: "Modern intraday futures education for US indices and Gold futures with structured bias, defined risk, and session-based review.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
