import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Add this metadata object
export const metadata = {
  title: "Surabhi K K | Full Stack Developer",
  description: "Explore my full-stack projects, skills, and resume.",
  openGraph: {
    title: "Surabhi K K | Full Stack Developer Portfolio",
    description: "Explore my full-stack projects, skills, and resume.",
    url: "https://surabhi-kk-portfolio1.vercel.app/", // Replace with your live domain
    siteName: "Surabhi Portfolio",
    images: [
      {
        url: "https://surabhi-kk-portfolio1.vercel.app/og-image.jpg", // Absolute public URL
        width: 1200,
        height: 630,
        alt: "Surabhi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surabhi K K | Full Stack Developer",
    description: "Explore my full-stack projects, skills, and resume.",
    images: ["https://surabhi-kk-portfolio1.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
