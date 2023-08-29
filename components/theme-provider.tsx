'use client'
import {ThemeProvider} from 'next-themes'
import siteData from "@/aurora.config";

export default function ThemeProviders({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme={siteData.theme} enableSystem>
            {children}
        </ThemeProvider>
    );
}
