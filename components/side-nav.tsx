'use client'

import {Button} from "@/components/ui/button";
import React from "react";
import {useRouter} from "next/navigation";
import {ArrowLeft, MessageSquareMore} from "lucide-react";

const SideNav = () => {
    const router = useRouter()

    const handleGoBack = () => router.back()

    const handleGoComment = () => {
        const element: any = document.getElementById("comment")
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <Button size={"icon"} variant={'ghost'} onClick={handleGoBack}>
                <ArrowLeft size={20}/>
            </Button>
            <Button size={"icon"} variant={'ghost'} onClick={handleGoComment}>
                <MessageSquareMore size={20}/>
            </Button>
        </>
    );
}


export default SideNav