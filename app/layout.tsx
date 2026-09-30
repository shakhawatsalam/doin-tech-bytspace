import type { Metadata } from "next";
import { clashDisplay, poppins, satoshi } from "./fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Learn, create, and grow with ByteSpace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${satoshi.variable} ${poppins.variable} ${clashDisplay.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
