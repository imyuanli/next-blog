import './globals.css'
import type {Metadata} from 'next'
import Navbar from "@/components/nav";
import siteData from '@/sitedata.json'
import ThemeProvider from "@/components/theme-provider";

export const metadata: Metadata = {
    title: siteData.title,
    description: siteData.description,
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <Navbar/>
            <main className={'mt-16 px-4 sm:mx-auto max-w-3xl'}>
                {children}
            </main>
        </ThemeProvider>
        </body>
        </html>
    )
}
