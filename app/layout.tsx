import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thepoppyannecookiecollection.com"),
  title: { default: "The Poppy-Anne Cookie Collection", template: "%s | Poppy-Anne" },
  description: "Handcrafted custom decorated sugar cookies in Glenpool, Oklahoma.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
