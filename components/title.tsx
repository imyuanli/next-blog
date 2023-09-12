import React from "react";

const Title = ({value}: { value: string }) => {
    return (
        <div className={'text-xl font-semibold'}>{value}</div>
    );
}

export default Title