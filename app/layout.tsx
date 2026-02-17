import type { Metadata } from "next";
import { Rubik } from 'next/font/google';
import "./globals.css";

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Konstantin Razdolski - Motivation Letter",
  description: "Take a look at my motivation letter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
