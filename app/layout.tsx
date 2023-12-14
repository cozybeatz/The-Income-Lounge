import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Income Lounge",
  description: "People like you are making $20k/month",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={onest.className}>{children}</body>
    </html>
  );
}
