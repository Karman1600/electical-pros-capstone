import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
