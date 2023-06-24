"use client"
import classNames from 'classnames';
import React, { useState, useMemo, Fragment } from 'react';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';

// Image
import Logo from '../image/Cisco-logo.png';
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
    id: number;
    name: string
    menus: string[];
    route: string;
    icon: any
}

// Routes Sidabar
const menuItems: MenuItem[] = [
    { id: 1, name:'navItem1', route: "Home1", icon: <Cash />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 2, name:'navItem2', route: "Home2", icon: <Bills />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 3, name:'navItem3', route: "Home3", icon: <Storage />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 4, name:'navItem4', route: "Home4", icon: <Requests />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 5, name:'navItem5', route: "Home5", icon: <Client />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 6, name:'navItem6', route: "Home6", icon: <Client />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 7, name:'navItem7', route: "Home7", icon: <Report />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 8, name:'navItem8', route: "Home8", icon: <Ranches />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 9, name:'navItem9', route: "Home9", icon: <Employe />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 10, name:'navItem10', route: "Home10", icon: <Units />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 11, name:'navItem11', route: "Home12", icon: <Settings />,
        menus: ["dashboard", "realtime", "events"],
    },
    { id: 12, name:'navItem12', route: "Home13", icon: <Notification />,
        menus: ["dashboard", "realtime", "events"],
    },
];

const Sidebar = () => {

    const router = useRouter();

    const [toggleCollapse, setToggleCollapse] = useState<boolean>(false)
    const [ nameCollapse, setnameCollapse ] = useState<string>('navItem1')

    // const activeMenu = useMemo(
    //     () => menuItems.find((menu) => menu.link === router.pathname),
    //     [router.pathname]
    // );

    const wrapperClasses = classNames(
        'py-8 pb-4 bg-Denim text-white fixed h-screen overflow-outo',
        {
            ['w-[360px]']: !toggleCollapse,
            ['w-[80px]']: toggleCollapse,
        }
    );

    const collapseIconClasses = classNames(
        "absolute right-0 top-0 rotate-180",
        {
            "rotate-0": toggleCollapse,
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

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    const handleCollapseToggle = (name: string) => {
        setnameCollapse(name);
    };

    return (
        <div className={wrapperClasses}>
            <div className="flex flex-col">
                <div className="flex items-center justify-between relative">
                    <button className={collapseIconClasses} onClick={handleSidebarToggle}> <Arrow /> </button>
                    <div className="flex item-center w-40 mx-auto mb-5 text-xl font-bold">
                        <Image src={Logo} alt='Logo' />
                        {/* <span
                                className={classNames("mt-2 text-lg font-medium text-text", {
                                    hidden: toggleCollapse,
                                })}
                            >
                                Logo
                            </span> */}
                    </div>
                </div>

                <div className="bg-white text-Denim flex items-center flex-row py-4 px-4">
                    <div style={{ width: "2.5rem" }}>
                        <Panal />
                    </div>
                    {!toggleCollapse && (
                        <span className='w-full px-4 flex-row'>
                            ddd
                        </span>
                    )}
                </div>

                <div className="flex flex-col items-start">
                    {
                        menuItems.map(({ icon: Icon, ...menu }) => {
                            const classes = getNavItemClasses(menu);
                            return (
                                <Fragment key={menu.id}>
                                    <div className={classes} onClick={() => handleCollapseToggle(menu.name)}>
                                        {/* <Link href={menu.link}> */}
                                            <div className="flex py-4 px-4 items-center flex-row w-full h-full">
                                                <div style={{ width: "2.5rem" }}>
                                                    {Icon}
                                                </div>
                                                {!toggleCollapse && (
                                                    <>
                                                        <span className={classNames(
                                                                "text-xl font-medium text-text-light flex items-center justify-between w-full px-4 flex-row"
                                                            )}>
                                                            {menu.route}
                                                            <span className={`transition-all ${nameCollapse === menu?.name? 'rotate-0' : 'rotate-180'}`}>
                                                                <FaAngleUp />
                                                            </span>
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        {/* </Link> */}
                                    </div>
                                    <ul className={`px-5 flex-flex-col transition-all ${nameCollapse === menu?.name? 'block' : 'hidden'}`}>
                                        {menu.menus.map(item => {
                                        return (
                                                <li className='py-1 text-lg'>{item}</li>
                                            )
                                        } 
                                        )}
                                    </ul>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;