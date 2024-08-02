import type { Metadata } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import CurrentSectionContextProvider from "@/context/section-context";
import ThemeSwitchProvider from "@/context/theme-context";
import ThemeButton from "@/components/theme-switch";
import Nav from "@/components/nav";

 const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto'
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
      <body className={`${roboto.variable} font-sans bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50`}>
        <div className="bg-[#e2ebfb] absolute top-[-6rem] -z-10 right-[5rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#628694]"></div>
        <div className="bg-[#e4d7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeSwitchProvider>
          <CurrentSectionContextProvider>
            <Nav/>
            {children}
            <Footer/>
            <ThemeButton/>
          </CurrentSectionContextProvider>
        </ThemeSwitchProvider>
      </body>
    </html>
  );
}
