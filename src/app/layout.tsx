import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { CartProvider } from "./components/CardContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LUXE - Luxury Fashion E-commerce",
  description: "Discover luxury fashion items at LUXE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
