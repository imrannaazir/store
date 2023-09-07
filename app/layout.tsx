import * as React from "react";
import Footer from "@/components/footer/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import ToastProvider from "@/providers/toast-provider";
import ReduxProvider from "@/redux/redux-provider";
import ModalProvider from "@/providers/modal-provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux/store";

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
          {/* <PersistGate loading={null} persistor={persistor}> */}
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
          {/* </PersistGate> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
