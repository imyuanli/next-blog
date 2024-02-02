import './globals.css'
import type {Metadata} from 'next'
import siteData from "@/blog.config";
import Header from "@/components/header";
import ProviderTheme from "@/provider/provider-theme";
import {Separator} from "@/components/ui/separator";

export const metadata: Metadata = {
    title: siteData.title,
    description: siteData.description,
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={'min-h-screen font-sans antialiased text-primary'}>
        <ProviderTheme>
            <Header/>
            <Separator/>
            <main className={'my-4 space-y-4'}>
                {children}
            </main>
        </ProviderTheme>
        </body>
        </html>
    )
}
