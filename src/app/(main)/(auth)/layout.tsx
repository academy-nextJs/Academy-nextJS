import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const registerLayout = ({ children }: Props) => {
    return (
        <div dir="rtl">{children}</div>
    )
}

export default registerLayout