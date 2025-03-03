import React from 'react';

interface HouseReserveLayoutProps {
    children: React.ReactNode;
}

const HouseReserveLayout: React.FC<HouseReserveLayoutProps> = ({ children }) => {
    return (
        <main dir='rtl' className='px-8 pt-14 pb-[9.75rem]'>{children}</main>
    );
};

export default HouseReserveLayout;