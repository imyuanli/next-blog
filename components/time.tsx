'use client'

import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from "dayjs";
import React from "react";

dayjs.extend(localizedFormat)
import 'dayjs/locale/zh-cn'
import siteData from "@/blog.config";

const Time = ({date}: any) => {
    const {language} = siteData
    return (
        <time className={'text-sm text-zinc-400 text-center'}>
            {dayjs(date).locale(language).format('ddd, MMM D, YYYY')}
        </time>
    );
}


export default Time