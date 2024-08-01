import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CurrentSectionContextProvider from "@/context/section-context";
import ThemeSwitchProvider from "@/context/theme-context";
import ThemeButton from "@/components/theme-switch";

const jetbrainsMono = JetBrains_Mono({ 
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
   variable: '--font-jetbrainsMono'
 });

export const metadata: Metadata = {
  title: "Ryan LaVigne",
  description: "My Portfolio thats shows who I am, Professional Experience and my Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${jetbrainsMono.variable} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50`}>
        <ThemeSwitchProvider>
          <CurrentSectionContextProvider>
            <Header/>
            {children}
            <Footer/>
            <ThemeButton/>
          </CurrentSectionContextProvider>
        </ThemeSwitchProvider>
      </body>
    </html>
  );
}
