import './globals.css'
import type {Metadata} from 'next'
import ThemeProvider from "@/components/theme-provider";
import siteData from "@/blog.config";
import Header from "@/components/header";

export const metadata: Metadata = {
    title: siteData.title,
    description: siteData.description,
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={'min-h-screen font-sans antialiased'}>
        <ThemeProvider>
            <div className={'container'}>
                <Header/>
                <main className={'my-4'}>
                    {children}
                </main>
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
