'use client'

import localizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from "dayjs";
import 'dayjs/locale/zh-cn'
dayjs.extend(localizedFormat)

const Time = ({date}: any) => {

    return (
        <time>
            {dayjs(date).format('MMMM D, YYYY')}
        </time>
    );
}


export default Time