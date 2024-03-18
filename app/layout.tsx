import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "Ideal Room Builder";
let description = "Craft Your Perfect Space Instantly.";
let sitename = "roomRevamp";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#e6e9f5] text-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
