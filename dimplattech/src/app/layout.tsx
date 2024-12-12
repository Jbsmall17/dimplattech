import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import { ContextComp } from '@/context/context';


export const metadata: Metadata = {
  title: "dimplattech",
  description: "dimplattech official website",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ContextComp>
      <body
        className="overflow-x-hidden"
      >
          {children}
      </body>
      </ContextComp>
    </html>
  );
}
