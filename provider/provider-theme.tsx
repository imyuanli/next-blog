'use client'

import {ThemeProvider} from 'next-themes'
import {blogConfig} from "@/blog.config";

export default function ProviderTheme({children}: { children: React.ReactNode }) {

    return (
        <ThemeProvider attribute="class" defaultTheme={blogConfig.theme}>
            {children}
        </ThemeProvider>
    );
}
