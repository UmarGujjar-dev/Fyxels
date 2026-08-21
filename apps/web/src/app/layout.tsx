import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://fyxels.com"),
  title: {
    default: "Fyxels — Premium Software Engineering Agency",
    template: "%s | Fyxels",
  },
  description:
    "Fyxels builds enterprise-grade software, scalable web & mobile applications, and digital experiences that drive measurable business growth. Custom Software, UI/UX, Cloud & DevOps.",
  keywords: [
    "software development agency",
    "custom software development",
    "web application development",
    "mobile app development",
    "UI/UX design",
    "Next.js development",
    "React development",
    "Node.js backend",
    "software house",
  ],
  authors: [{ name: "Fyxels", url: "https://fyxels.com" }],
  creator: "Fyxels",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fyxels.com",
    siteName: "Fyxels",
    title: "Fyxels — Premium Software Engineering Agency",
    description:
      "We build enterprise-grade software, scalable applications, and digital experiences that drive measurable results.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fyxels — Premium Software Engineering Agency",
    description:
      "We build enterprise-grade software, scalable applications, and digital experiences that drive measurable results.",
    images: ["/og-image.png"],
    creator: "@fyxels",
  },
  icons: {
    icon: [
      { url: "/logo-mark.jpg", type: "image/jpeg" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo-mark.jpg",
    apple: "/logo-mark.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
