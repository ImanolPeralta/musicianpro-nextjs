import Navbar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import { Mulish } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "MusicianPro",
  description: "Comprá guitarras, baterías, teclados y más en MusicianPro.",
  icons: {
    icon: "/ico.ico",
    
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={mulish.className} style={{backgroundColor: '#F5EFE6'}}>
        <AuthProvider>
        <CartProvider>
        <Navbar />
        <main className="pt-16">
          {children}
          </main>
        <Footer />
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}