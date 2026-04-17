import Navbar from "@/components/shared/Navbar/Navbar";
import { Geist } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/shared/Footer/Footer";
import Providers from "./lib/providers";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper | Interact With Friends",
  description: "A Platform to Keep Your Friends Closer",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col space-y-5">
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}
