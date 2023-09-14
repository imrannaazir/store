import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import * as React from "react";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ToastProvider from "@/providers/toast-provider";
import ReduxProvider from "@/redux/redux-provider";
import ModalProvider from "@/providers/modal-provider";
import Header from "@/components/header/header";

import "./globals.css";
import MobileSidebar from "@/components/header/mobile-sidebar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlossaryFy",
  description: "Store of glossary products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ReduxProvider>
          <ModalProvider />
          <MobileSidebar />
          <Header />
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
