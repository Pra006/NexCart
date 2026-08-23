import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "NexCart",
  description: "NexCart - Multi-Vendor Ecommerce Application",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={inter.variable} data-scroll-behaviour="smooth"
        suppressHydrationWarning
    >
      <body className={inter.className}>
        <Toaster position="bottom-right"/>{children}</body>
    </html>
  );
}
