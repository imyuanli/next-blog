'use client'

import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from "dayjs";
import React from "react";
dayjs.extend(localizedFormat)

const Time = ({date}:any) => {
    return (
        <time className={'text-sm text-zinc-400 text-center'}>
            {dayjs(date).format('ddd, MMM D, YYYY')}
        </time>
    );
}


export default Time