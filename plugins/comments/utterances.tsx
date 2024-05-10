import {useEffect, useRef} from "react";
import {useTheme} from "next-themes";

const Utterances = ({config}: any) => {
    const ref: any = useRef(null)

    const {theme} = useTheme()

    useEffect(() => {
        if (!ref.current) return

        ref?.current.childNodes.forEach((node: any) => node.remove())

        const script = document.createElement('script');
        Object.keys(config).forEach((item: any) => {
            script.setAttribute(item, config[item])
        })
        if (theme === 'dark') {
            script.setAttribute('theme', 'github-dark')
        }

        ref?.current.appendChild(script);

        return () => {
            if (ref.current) {
                // remove the script from the DOM
                ref?.current.childNodes.forEach((node: any) => node.remove())
            }
        }
    }, [theme])

    return (
        <div ref={ref}/>
    );
}


export default Utterances