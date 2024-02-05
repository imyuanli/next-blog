'use client'

import {ThemeProvider} from 'next-themes'
import siteData from "@/blog.config";

export default function ProviderTheme({children}: { children: React.ReactNode }) {

    return (
        <ThemeProvider  attribute="class" defaultTheme={siteData.theme}>
            {children}
        </ThemeProvider>
    );
}
