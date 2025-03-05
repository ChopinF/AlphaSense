"use client";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/remix";
import { BrowserRouter as Router } from "react-router-dom";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased">
        <Router>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Analytics />
          <footer>
            <Footer />
          </footer>
        </Router>
      </body>
    </html>
  );
}

