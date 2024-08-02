import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Occular Disease Recognition",
  description: "The Ocular Disease Recognition App is a cutting-edge tool designed to assist healthcare professionals and researchers in the early detection and diagnosis of ocular diseases. Utilizing advanced image analysis and machine learning techniques, the app provides accurate and reliable identification of various eye conditions, improving patient outcomes and streamlining diagnostic processes.",
  metadataBase: new URL("https://ocular-disease-recognition.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Occular Disease Recognition</title>
        <meta name="description" content="The Ocular Disease Recognition App is a cutting-edge tool designed to assist healthcare professionals and researchers in the early detection and diagnosis of ocular diseases. Utilizing advanced image analysis and machine learning techniques, the app provides accurate and reliable identification of various eye conditions, improving patient outcomes and streamlining diagnostic processes." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ocular-disease-recognition.vercel.app/" />
        <meta property="og:title" content="Occular Disease Recognition" />
        <meta property="og:description" content="The Ocular Disease Recognition App is a cutting-edge tool designed to assist healthcare professionals and researchers in the early detection and diagnosis of ocular diseases. Utilizing advanced image analysis and machine learning techniques, the app provides accurate and reliable identification of various eye conditions, improving patient outcomes and streamlining diagnostic processes." />
        <meta property="og:image" content="https://ocular-disease-recognition.vercel.app/odrTwitter.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ocular-disease-recognition.vercel.app/" />
        <meta property="twitter:title" content="Occular Disease Recognition" />
        <meta property="twitter:description" content="The Ocular Disease Recognition App is a cutting-edge tool designed to assist healthcare professionals and researchers in the early detection and diagnosis of ocular diseases. Utilizing advanced image analysis and machine learning techniques, the app provides accurate and reliable identification of various eye conditions, improving patient outcomes and streamlining diagnostic processes." />
        <meta property="twitter:image" content="https://ocular-disease-recognition.vercel.app/odrTwitter.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
