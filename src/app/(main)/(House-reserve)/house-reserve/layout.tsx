import React from 'react';

interface HouseReserveLayoutProps {
    children: React.ReactNode;
}

const HouseReserveLayout: React.FC<HouseReserveLayoutProps> = ({ children }) => {
    return (
        <main dir='rtl' className='w-[1376px] mx-8'>{children}</main>
    );
};

export default HouseReserveLayout;