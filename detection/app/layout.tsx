import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Occular Disease Recognition",
  description: "The Ocular Disease Recognition App is a cutting-edge tool designed to assist healthcare professionals and researchers in the early detection and diagnosis of ocular diseases. Utilizing advanced image analysis and machine learning techniques, the app provides accurate and reliable identification of various eye conditions, improving patient outcomes and streamlining diagnostic processes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
