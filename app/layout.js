"use client";
import React, { useContext } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/footer"; 
import  { AuthContextProvider } from "@/app/lib/auth-context.js";
import { ThemeProvider } from "./context/themes"; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
      <ThemeProvider> 
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </body>
        </html>
      </ThemeProvider>
    </AuthContextProvider>
  );
}
