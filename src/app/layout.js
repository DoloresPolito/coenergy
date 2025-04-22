import { Montserrat, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../structure/Navbar";
import Footer from "@/structure/Footer";
import NewFooter from "@/structure/NewFooter";
import Header from "@/structure/Header";

// Fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Fuentes de Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"], // Subconjuntos de caracteres (ajustar según necesidad)
  variable: "--font-montserrat",
  display: "swap", // Mejora el rendimiento (usa fallback hasta cargar la fuente)
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "COENERGY SA",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${inter.variable}`}
      >
        {/* <Navbar /> */}
        <Header/>
        {children}
        <NewFooter />
      </body>
    </html>
  );
}
