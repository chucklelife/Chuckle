import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ericaOne = localFont({
  src: [
    {
      path: "./fonts/EricaOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-erica-one",
});

export const metadata: Metadata = {
  title: "Chuckle",
  description: "Your daily dose of misery & $money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary ${ericaOne.variable}`}>{children}</body>
    </html>
  );
}
