import React, { useState } from "react";

import { navBar } from "./config";
import { getStyles } from "./style";
import NavBarItem from "./navBarItem/component";
import { Desktop, NotDesktop } from "../../../responsive/component";

const NavBar = () => {
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    const { mobile } = getStyles(isActiveBurger);
    return (
        <div className="w-2/3">
            <NotDesktop>
                <p onClick={() => setIsActiveBurger(!isActiveBurger)}>Burger</p>
                <div className={mobile}>
                    {navBar.map((navBarItem, idx) => (
                        <NavBarItem
                            {...navBarItem}
                            key={`navbar ${idx}`}
                        />
                    ))}
                </div>
            </NotDesktop>
            <Desktop>
                <div className="w-80 flex relative justify-between ml-4">
                    {navBar.map((navBarItem, idx) => (
                        <NavBarItem
                            {...navBarItem}
                            key={`navbar ${idx}`}
                        />
                    ))}
                </div>

                {/* <div className="flex gap-3 ">
                    {navBar.map(({ name }) => (
                        <p>{name}</p>
                    ))}
                </div> */}
            </Desktop>
        </div>
    );
};

export default NavBar;
