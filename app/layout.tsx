import './globals.css'
import type {Metadata} from 'next'
import Navbar from "@/components/nav";
import ThemeProvider from "@/components/theme-provider";
import siteData from "@/aurora.config";

export const metadata: Metadata = {
    title: siteData.title,
    description: siteData.description,
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={'min-h-screen font-sans text-[0.95rem]'}>
        <ThemeProvider>
            <div className={'container'}>
                <Navbar/>
                <main>
                    {children}
                </main>
            </div>
        </ThemeProvider>
        </body>
        </html>
    )
}
