import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/cn";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import CustomCursor from "@/components/CustomCursor";

const hostGrotesk = Host_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desint | Interior Design Agency",
  description: "Desint は、Next.js と GSAP を使用して構築されたモダンなインテリアデザインエージェンシーの Web サイトで、洗練された空間、クリエイティブなディレクション、そして滑らかでインタラクティブなアニメーションを紹介しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${hostGrotesk.className} antialiased`}
      >
        {/* <CustomCursor /> */}
        <Header />
        <main className={cn("min-h-svh")}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
