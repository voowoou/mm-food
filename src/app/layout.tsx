import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.sass";
import "./reset.sass";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"], variable: '--font-hanken-grotesk', display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter', display: "swap" });

export const metadata: Metadata = {
  title: "MM FOOD",
  description: "Search recipes by specified request",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${inter.variable} ${hankenGrotesk.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}