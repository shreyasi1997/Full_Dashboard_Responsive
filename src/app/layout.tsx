import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Serif, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"],variable: "--font-IBM_Plex_Serif", });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-IBM_Plex_Serif",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "DashBoard creating by Shreo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`} // Use the correct variable names
      >
        {children}
      </body>
    </html>
  );
}
