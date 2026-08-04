import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getLang } from "@/lib/lang.server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Vedic Astrology App | ',
    template: '%s | Jyotish',
  },
  description:
    'Vedic astrology calculator with dosha detection and planetary transits.',
  keywords: [
    'vedic astrology', 'kundli', 'kundali', 'birth chart', 'panchang',
    'gun milan', 'ashtakoot', 'vimshottari dasha', 'manglik dosha',
    'kalsarpa dosha', 'sade sati', 'jyotish', 'vedic astrology API',
    'astrology app', 'RoxyAPI', 'mangal dosha', 'planetary transits', 'doshas', 'rahu','ketu,'
  ],
  authors: [{ name: 'RoxyAPI', url: 'https://roxyapi.com' }],
  openGraph: {
    title: 'Vedic Astrology App',
    description: 'Vedic astrology template with compatibility matching, and Dasha analysis. ',
    url: 'https://github.com/RoxyAPI/jyotish-vedic-astrology-app',
    siteName: 'Vedic Astrology Calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedic Astrology'
    ',
    description: 'Vedic astrology template with compatibility matching, and planetary transit analysis.',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLang();

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar lang={lang} />
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
