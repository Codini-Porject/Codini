// Import necessary dependencies
import React from "react";
import { IdentityProvider } from "../app/(auth)/IdentityContext";
import Navbar from "./Navbar/page";
import Footer from "./footer/page";
import "./globals.css";
import "../app/styles copy/main.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IdentityProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </IdentityProvider>
  );
}
