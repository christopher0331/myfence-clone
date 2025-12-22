import type { ReactNode } from "react";
import "../index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HashRedirectHandler } from "./hash-redirect-handler";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <HashRedirectHandler />
        <Header />
        {/* Add top padding so content clears the fixed header */}
        <main className="flex-1 pt-28 md:pt-36">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
