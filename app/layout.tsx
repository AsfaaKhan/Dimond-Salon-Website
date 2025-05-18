"use client"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Script from "next/script";
import Headline from "@/components/headline";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Headline/>
        <Header/>
        {children}
       <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
        <Footer/>
      </body>
    </html>
  );
}
