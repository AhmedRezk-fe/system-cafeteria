"use client"
import classNames from 'classnames';
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// Image
import Logo from '@/image/Cisco-logo.png'
import Image from 'next/image';

// Icons
import Arrow from '../image/Arrow';
import Panal from '../image/Panal';
import Cash from '../image/Cash';
import Bills from '../image/Bills';
import Storage from '../image/Storage';
import Requests from '../image/Requests';
import Client from '../image/Client';
import Report from '../image/Report';
import Ranches from '../image/Ranches';
import Employe from '../image/Employe';
import Units from '../image/Units';
import Settings from '../image/Settings';
import Notification from '../image/Notification';
import { FaAngleUp } from "react-icons/fa6"; 

interface Menu {
    id: number;
    route: string;
}

interface MenuItem {
    id: number
    link: string;
    route: string;
    icon: any
}

// Routes Sidabar
const menuItems: MenuItem[] = [
    // { id: 1, route: "Home", icon: <Panal />, link: "/Home" },
    { id: 1, route: "Home1", icon: <Cash />, link: "/Home1" },
    { id: 2, route: "Home2", icon: <Bills />, link: "/Home2" },
    { id: 3, route: "Home3", icon: <Storage />, link: "/Home3" },
    { id: 4, route: "Home4", icon: <Requests />, link: "/Home4" },
    { id: 5, route: "Home5", icon: <Client />, link: "/Home5" },
    { id: 6, route: "Home6", icon: <Client />, link: "/Home6" },
    { id: 7, route: "Home7", icon: <Report />, link: "/Home7" },
    { id: 8, route: "Home8", icon: <Ranches />, link: "/Home8" },
    { id: 9, route: "Home9", icon: <Employe />, link: "/Home9" },
    { id: 10, route: "Home10", icon: <Units />, link: "/Home10" },
    { id: 11, route: "Home12", icon: <Settings />, link: "/Home11" },
    { id: 12, route: "Home13", icon: <Notification />, link: "/Home12" },
];

const Sidebar = () => {

    const router = useRouter();

    const [toggleCollapse, setToggleCollapse] = useState<boolean>(false)
    // const [ isCollapse , setIsCollapse ] = useState<boolean>(false)

    // const activeMenu = useMemo(
    //     () => menuItems.find((menu) => menu.link === router.pathname),
    //     [router.pathname]
    // );

    // const wrapperClasses = classNames(
    //     `h-screen p-4 pt-8 pb-4 bg-Denim text-white flex justify-between flex-col ${toggleCollapse?"w-1":"w-80"}`,
    //     // {
    //     //     ['w-full']: !toggleCollapse,
    //     //     ['w-[20px]']: toggleCollapse,
    //     // }
    // );

    const collapseIconClasses = classNames(
        "absolute",
        {
            "rotate-180": toggleCollapse,
        }
    );

    const getNavItemClasses = (menu: Menu) => {
        return classNames(
            "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
            {
                // ["bg-light-lighter"]: activeMenu?.id === menu.id,
            }
        );
    };

    // const onMouseOver = () => {
    //     setIsCollapse(!isCollapse);
    // };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    return (
        <div
            className={`h-screen p-4 pt-8 pb-4 bg-Denim text-white flex justify-between flex-col ${toggleCollapse?"w-[80px]":"w-[350px]"}`}
        // onMouseEnter={onMouseOver}
        // onMouseLeave={onMouseOver}
        // style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <div className="flex flex-col">
                <div className="flex items-center justify-between relative">
                    <div className="flex item-center w-40 mx-auto mb-5 text-xl font-bold">
                        {/* <Image src={Logo} alt='Logo' /> */}
                        {/* <span
                                className={classNames("mt-2 text-lg font-medium text-text", {
                                    hidden: toggleCollapse,
                                })}
                            >
                                Logo
                            </span> */}
                    </div>
                    <button className={collapseIconClasses} onClick={handleSidebarToggle}> <Arrow /> </button>
                </div>

                <div className="bg-white text-Denim flex py-4">
                    <Panal />
                    <span>
                        ddd
                    </span>
                </div>

                <div className="flex flex-col items-start mt-24">
                    {
                        menuItems.map(({ icon: Icon, ...menu }) => {
                            const classes = getNavItemClasses(menu);
                            return (
                                <div key={menu.id} className={classes}>
                                    {/* <Link href={menu.link}> */}
                                        <div className="flex py-4 px-4 items-center flex-row w-full h-full">
                                            <div style={{ width: "2.5rem" }}>
                                                {Icon}
                                            </div>
                                            {!toggleCollapse && (
                                                <span
                                                    className={classNames(
                                                        "text-md font-medium text-text-light flex items-center justify-between w-full px-4 flex-row"
                                                    )}
                                                >
                                                    {menu.route}
                                                    <FaAngleUp />
                                                </span>
                                            )}
                                        </div>
                                    {/* </Link> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;