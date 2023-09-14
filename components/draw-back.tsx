'use client'

import {Button} from "@/components/ui/button";
import {LuArrowLeft} from "react-icons/lu";
import React from "react";
import {useRouter} from "next/navigation";

const DrawBack = () => {
    const router = useRouter()

    return (
        <>
            <div className={'sm:block hidden'}>
                <div className={'sm:absolute -left-40 top-0 flex justify-center items-center'}>
                    <Button variant={'ghost'} onClick={() => {
                        router.back()
                    }}>
                        <LuArrowLeft/>
                        <span className={'ml-2'}>Go Back</span>
                    </Button>
                </div>
            </div>
            <div
                className={'md:hidden block mb-4'}
                onClick={() => {
                    router.back()
                }}
            >
                <div className={'flex items-center'}>
                    <LuArrowLeft/>
                    <span className={'ml-2'}>Go Back</span>
                </div>
            </div>
        </>
    );
}


export default DrawBack