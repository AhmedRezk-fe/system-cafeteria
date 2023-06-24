import React, { ReactNode } from 'react'
import Sidebar from './Sidebar/index';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='h-screen flex flex-row justify-start'>
            <Sidebar />
            <div className='bg-light w-full px-8'>{ children }</div>
        </div>
    )
}

export default Layout