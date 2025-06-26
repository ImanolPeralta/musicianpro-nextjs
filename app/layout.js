import Navbar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "MusicianPro",
  description: "Comprá guitarras, baterías, teclados y más en MusicianPro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={mulish.className} style={{backgroundColor: '#F5EFE6'}}>
        <Navbar />
        <main className="pt-16">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}

