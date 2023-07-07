"use client";
import React, { ReactNode, useEffect, useState } from 'react'
import Sidebar from './Sidebar/index';
import Header from './Header/index';

type LayoutProps = {
    children: ReactNode;
};



const Layout = ({ children }: LayoutProps) => {

    const [openNav , setOpenNav] = useState<string | null>("open")
    const handelWidthNavASidebar = (ststusSide:string) => {
        console.log("ststusSide", ststusSide)
        setOpenNav(ststusSide)
    }
    return (
        <div className={`flex flex-row justify-start ${openNav === "open" ?"ps-[320px]":"ps-[80px]" } `}>
            <Sidebar stateNavASidebar={handelWidthNavASidebar} />
            <div className='container'>
                <Header />
                { children }
            </div>
        </div>
    )
}

export default Layout