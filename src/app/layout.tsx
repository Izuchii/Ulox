import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/navigation/TopNav";
import { BottomNav } from "@/components/navigation/BottomNav";

export const metadata: Metadata = {
  title: "Ulox - Real Estate Super Platform",
  description: "Find properties, connect with roommates, discover services, and access skilled labor - all in one platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[--background] font-sans">
        <TopNav />
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
