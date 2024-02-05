import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Separator} from "@/components/ui/separator";
import Header from "@/components/header";
import siteData from "@/blog.config";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: siteData.title,
    description: siteData.description,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={'min-h-screen font-mono antialiased text-primary'}>
        <Header/>
        <Separator/>
        <main className={'container my-12 space-y-8'}>
            <div className={'prose md:prose-lg'}>
                {children}
            </div>
        </main>
        </body>
        </html>
    );
}
