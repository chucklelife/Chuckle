import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Favicon from "./favicon.ico";
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
  description:
    "Experience the future of SocialFi on Monad, where vines is alive, decentralized finance meets social engagement for secure, rewarding, and interactive community-driven experiences",
  metadataBase: new URL("https://chuckle.life"),
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
    apple: Favicon.src,
    other: { rel: "apple-touch-icon-precomposed", url: Favicon.src },
  },
  keywords: ["Chuckles"],
  openGraph: {
    title: "Chuckles | SocialFi On Monad",
    description:
      "Experience the future of SocialFi on Monad, where vines is alive, decentralized finance meets social engagement for secure, rewarding, and interactive community-driven experiences",
    images: [
      {
        url: "https://chuckle.life/banner/banner.png",
        width: 1200,
        height: 600,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Functors",
  },
  twitter: {
    title: "Chuckles | SocialFi On Monad",
    description:
      "Experience the future of SocialFi on Monad, where vines is alive, decentralized finance meets social engagement for secure, rewarding, and interactive community-driven experiences",
    images: {
      url: "https://chuckle.life/banner/banner.png",
      width: 1200,
      height: 600,
      type: "image/png",
      alt: "Chuckle Banner",
    },
    card: "player",
    creator: "@chuckle",
  },

  category: "technology",
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
