import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vanamata | Aventuras Autênticas",
  description:
    "Experiências premium de van pelo Brasil com conforto, segurança e roteiros exclusivos.",
  metadataBase: new URL("https://vanamata.experience"),
  openGraph: {
    title: "Vanamata | Aventuras Autênticas na Natureza Brasileira",
    description:
      "Vans equipadas, destinos exclusivos e turismo sustentável para explorar o Brasil.",
    type: "website",
    url: "https://vanamata.experience",
    siteName: "Vanamata",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanamata | Aventuras Autênticas",
    description:
      "Monte seu próximo roteiro por montanhas, cachoeiras e trilhas brasileiras.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
