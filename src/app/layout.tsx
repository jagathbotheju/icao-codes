import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ToastProvider from "./components/ToastProvider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ICAO/IATA Codes",
  description: "Search ICAO and IATA aviation codes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen min-w-screen flex flex-col`}
      >
        <ToastProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
