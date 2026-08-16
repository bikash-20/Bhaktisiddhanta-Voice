import "./globals.css";
import { Cormorant_Garamond, Inter, Tiro_Devanagari_Hindi } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mantra = Tiro_Devanagari_Hindi({
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  variable: "--font-mantra",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://bhaktisiddhantavoice.org"),
  title: {
    default: "Bhaktisiddhanta Voice — ISKCON Youth Forum, Sylhet",
    template: "%s · Bhaktisiddhanta Voice",
  },
  description:
    "Spreading Krishna consciousness among university and college students in Sylhet since 2009. Temple, meals, residence, courses, and alumni network — under ISKCON Youth Forum, Sylhet.",
  keywords: [
    "ISKCON",
    "Youth Forum",
    "Sylhet",
    "Bhaktisiddhanta",
    "Krishna consciousness",
    "temple",
    "Radha Krishna",
    "Jagannath",
    "SAU",
    "Sylhet Agricultural University",
    "Sylhet Engineering College",
  ],
  authors: [{ name: "Bhaktisiddhanta Voice" }],
  icons: {
    icon: [{ url: "/images/logo.svg", type: "image/svg+xml" }],
    apple: "/images/logo.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Bhaktisiddhanta Voice",
    title: "Bhaktisiddhanta Voice — ISKCON Youth Forum, Sylhet",
    description:
      "Spreading Krishna consciousness among students in Sylhet since 2009. Temple, meals, residence, courses.",
    images: ["/images/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaktisiddhanta Voice — ISKCON Youth Forum, Sylhet",
    description: "Temple, meals, residence, courses — since 2009.",
    images: ["/images/logo.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#fdfaf3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mantra.variable}`}>
      <body className="paper min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
