import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Separator} from "@/components/ui/separator";
import Header from "@/components/header";
import siteData from "@/blog.config";
import ProviderTheme from "@/provider/provider-theme";
import Title from "@/components/title";
import Footer from "@/components/footer";

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
        <ProviderTheme>
            <body className={'min-h-screen font-mono flex flex-col justify-between'}>
            <div className={'flex-1'}>
                <Header/>
                <Separator/>
                <main className={'container md:my-12 my-8'}>
                    <div className={'prose md:prose-lg min-w-full w-full dark:prose-invert'}>
                        <Title/>
                        {children}
                    </div>
                </main>
            </div>
            <Footer/>
            </body>
        </ProviderTheme>
        </html>
    );
}
