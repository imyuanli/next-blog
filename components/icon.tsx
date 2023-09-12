'use client';
import React from "react";
const Icon = ({icon}: any) => {
    return (
        <>
            {React.createElement(icon, {size: 16})}
        </>
    );
}
export default Icon