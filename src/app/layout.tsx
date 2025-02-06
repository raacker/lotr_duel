import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "LOTR Duel Companion",
  description: "A companion app for LOTR Duel board game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="overflow-x-hidden">
        <LanguageProvider>
          <div className="flex flex-col h-screen w-full max-w-full">
            <div className="w-full bg-gray-200 flex-none">
              <div className="max-w-7xl mx-auto px-4 h-20">에드센스 자리</div>
            </div>

            <main className="flex-1 w-full overflow-auto">
              <div className="max-w-7xl mx-auto h-full">{children}</div>
            </main>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
