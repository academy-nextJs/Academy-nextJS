import React from 'react';

interface HouseReserveLayoutProps {
    children: React.ReactNode;
}

const HouseReserveLayout: React.FC<HouseReserveLayoutProps> = ({ children }) => {
    return (
        <main dir='rtl'>{children}</main>
    );
};

export default HouseReserveLayout;