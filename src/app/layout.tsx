import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarDemo } from "@/components/sidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kartik Kochhar",
  description: "Portal to Minimalist Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en">

<body className={inter.className}>

{children}
  <SidebarDemo/>

  <Footer/>
 

  


  
      </body>
</html>
  );
}
