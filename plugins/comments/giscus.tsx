import GiscusComponent from "@giscus/react";
import {useTheme} from "next-themes";

const giscus = ({config}: any) => {
    const {theme} = useTheme()

    if (theme === 'dark') {
        config.theme = 'dark'
    }

    return (
        <GiscusComponent id="comments" {...config} theme={theme}/>
    );
}


export default giscus