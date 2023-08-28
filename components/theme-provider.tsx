'use client'
import siteData from '@/sitedata.json'
import {ThemeProvider} from 'next-themes'

export default function ThemeProviders({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme={siteData.theme} enableSystem>
            {children}
        </ThemeProvider>
    )
}
