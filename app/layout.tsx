import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project 108",
  description:
    "108 Jangchub Chortens — A Royal initiative for a sacred gesture of peace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
