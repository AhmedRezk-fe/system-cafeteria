import React, { ReactNode } from 'react'
import Sidebar from './Sidebar/index';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='flex flex-row justify-start'>
            <Sidebar />
            <div className='container'>{ children }</div>
        </div>
    )
}

export default Layout