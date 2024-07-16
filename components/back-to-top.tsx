"use client"

import {Button} from "@/components/ui/button";
import {ArrowUp} from "lucide-react";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

const BackToTop = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        addEventListener('scroll', () => {
            setShow(window.scrollY >= 300)
        })
        return () => {
            removeEventListener('scroll', () => {
            })
        }
    })

    return (
        show && (
            <Button
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }}
                className={cn('fixed bottom-4 md:bottom-16 right-4 md:right-8 z-50')}
                size={'icon'}
            >
                <ArrowUp size={20}/>
            </Button>
        )
    )
}

export default BackToTop;