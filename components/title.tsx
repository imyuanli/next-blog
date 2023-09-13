import React from "react";

interface TitleProps {
    title: string
    description?: any
}

const Title: React.FunctionComponent<TitleProps> = ({title, description}: any) => {
    return (
        <div>
            <div className={'text-2xl font-semibold mb-1'}>
                {title}
            </div>
            {description && (
                <div className={'text-sm italic text-zinc-600'}>
                    {description}
                </div>
            )}
        </div>
    );
}

export default Title