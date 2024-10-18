import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer"; // Make sure to import Footer
import { AuthContextProvider } from "@/lib/auth-context";

// Define custom fonts
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

// Metadata
export const metadata = {
  title: "Electrical Pros",
  description: "Professional electrical consultancy services",
};

// RootLayout function
export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          {/* Navbar at the top */}
          <Navbar />
          
          {/* Page content */}
          <main className="flex-grow">{children}</main>

          {/* Footer at the bottom */}
          <Footer />
        </body>
      </html>
    </AuthContextProvider>
  );
}
