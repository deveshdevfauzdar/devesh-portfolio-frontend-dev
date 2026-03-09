import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Devesh Dev Fauzdar ✌️",
  description: "A creative frontend developer passionate about building immersive, interactive web experiences with modern frameworks and AI-driven solutions.",
  keywords: "Devesh Dev Fauzdar, Frontend Developer, React Developer, Next.js, Three.js, TypeScript, JavaScript, AI Agent Developer, Data Science, Web Development, Portfolio",
  authors: [{ name: "Devesh Dev Fauzdar" }],
  creator: "Devesh Dev Fauzdar",
  publisher: "Devesh Dev Fauzdar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Devesh Dev Fauzdar - Frontend Developer",
    description: "A creative frontend developer passionate about building immersive, interactive web experiences with modern frameworks and AI-driven solutions.",
    url: "https://deveshdevfauzdar.github.io",
    siteName: "Devesh Dev Fauzdar's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devesh Dev Fauzdar - Frontend Developer",
    description: "A creative frontend developer passionate about building immersive, interactive web experiences with modern frameworks and AI-driven solutions.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
