import React from "react";

const Title = ({value}: { value: string }) => {
    return (
        <div className={'text-lg text-zinc-800 font-semibold'}>{value}</div>
    );
}

export default Title