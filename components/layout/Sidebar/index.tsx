"use client";
import classNames from "classnames";
import React, { useState, useMemo, Fragment } from "react";
import { useRouter } from "next/navigation";
// import Link from 'next/link';

// Image
import Logo from "../image/Cisco-logo.png";
import Image from "next/image";

// Icons
import Arrow from "../image/Arrow";
import Panal from "../image/Panal";
import Cash from "../image/Cash";
import Bills from "../image/Bills";
import Storage from "../image/Storage";
import Requests from "../image/Requests";
import Client from "../image/Client";
import Report from "../image/Report";
import Ranches from "../image/Ranches";
import Employe from "../image/Employe";
import Units from "../image/Units";
import Settings from "../image/Settings";
import Notification from "../image/Notification";
import { FaAngleUp } from "react-icons/fa6";
import Link from "next/link";

interface Menu {
  id: number;
  route: string;
}

interface MenuItem {
  id: number;
  name: string;
  menus: string[];
  route: string;
  icon: any;
}

// Routes Sidabar
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "navItem1",
    route: "Home1",
    icon: <Cash />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 2,
    name: "navItem2",
    route: "Home2",
    icon: <Bills />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 3,
    name: "navItem3",
    route: "Home3",
    icon: <Storage />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 4,
    name: "navItem4",
    route: "Home4",
    icon: <Requests />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 5,
    name: "navItem5",
    route: "Home5",
    icon: <Client />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 6,
    name: "navItem6",
    route: "Home6",
    icon: <Client />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 7,
    name: "navItem7",
    route: "Home7",
    icon: <Report />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 8,
    name: "navItem8",
    route: "Home8",
    icon: <Ranches />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 9,
    name: "navItem9",
    route: "Home9",
    icon: <Employe />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 10,
    name: "navItem10",
    route: "Home10",
    icon: <Units />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 11,
    name: "navItem11",
    route: "Home12",
    icon: <Settings />,
    menus: ["dashboard", "realtime", "events"],
  },
  {
    id: 12,
    name: "navItem12",
    route: "Home13",
    icon: <Notification />,
    menus: ["dashboard", "realtime", "events"],
  },
];

const Sidebar = ({
  stateNavASidebar,
  navBar,
}: {
  stateNavASidebar?: (ss: string) => void;
  navBar?: string;
}) => {
  const router = useRouter();

  const [toggleCollapse, setToggleCollapse] = useState<boolean>(false);
  const [nameCollapse, setnameCollapse] = useState<string>("navItem1");

  const wrapperClasses = classNames(
    "py-8 pb-4 bg-25 text-50 start-0 top-0 fixed h-screen overflow-auto",
    {
      ["w-[320px]"]: !toggleCollapse,
      ["w-[80px]"]: toggleCollapse,
    }
  );

  const navbarClass = classNames("bg-200 text-100");

  const collapseIconClasses = classNames("absolute left-0", {
    "rotate-0": !toggleCollapse,
    "rotate-180": toggleCollapse,
  });

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
    setnameCollapse("");
    if (stateNavASidebar) {
      if (toggleCollapse) {
        stateNavASidebar("open");
      } else {
        stateNavASidebar("close");
      }
    }
  };

  const handleCollapseToggle = (name: string) => {
    setToggleCollapse(false);
    setnameCollapse(name);
  };

  return (
    <div className={!navBar ? wrapperClasses : navbarClass}>
      <div className="flex flex-col">
        {!navBar && (
          <>
            <div className="flex items-center justify-between relative">
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <Arrow />
              </button>
              <div className="flex item-center w-20 mx-auto mb-5 text-xl font-bold">
                <Image src={Logo} alt="Logo" />
                {/* <span
                                    className={classNames("mt-2 text-lg font-medium text-text", {
                                        hidden: toggleCollapse,
                                    })}
                                >
                                    Logo
                                </span> */}
              </div>
            </div>

            <div className="bg-50 text-25 flex items-center flex-row py-4 px-4">
              <div style={{ width: "2.5rem" }}>
                <Panal />
              </div>
              {!toggleCollapse && (
                <span className="w-full px-4 flex-row">ddd</span>
              )}
            </div>
          </>
        )}

        <div
          className={`${
            !navBar
              ? "flex flex-col items-start"
              : "flex flex-row overflow-hidden "
          }`}
        >
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <Fragment key={menu.id}>
                <div className=" w-full border-b border-opacity-[.5] border-300">
                  <div
                    className={`px-[20px] ${classes} ${navBar ? "relative " : ""}`}
                    onClick={() => handleCollapseToggle(menu.name)}
                  >
                    {/* <Link href={menu.link}> */}
                    <div className="flex py-4 px-4 items-center flex-row w-full h-full">
                      <div
                        className={`${!navBar ? "" : "svgCss"}`}
                        style={{ width: "2.5rem" }}
                      >
                        {Icon}
                      </div>
                      {!toggleCollapse && (
                        <>
                          <span
                            className={classNames(
                              "text-xl font-medium text-text-light flex items-center justify-between w-full px-4 flex-row"
                            )}
                          >
                            {menu.route}
                            <span
                              className={`transition-all ${
                                nameCollapse === menu?.name
                                  ? "rotate-0"
                                  : "rotate-180"
                              }`}
                            >
                              <FaAngleUp />
                            </span>
                          </span>
                        </>
                      )}
                    </div>
                    {/* </Link> */}
                  </div>
                  <ul
                    className={`px-5 flex-flex-col transition-all ${
                      navBar ? "absolute w-full bg-200 hidden" : ""
                    } ${nameCollapse === menu?.name ? "block" : "hidden"}`}
                  >
                    {menu.menus.map((item) => {
                      return (
                        <li className="py-1 text-lg">
                          <Link className="text-400" href={"/"}>
                            {item}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
