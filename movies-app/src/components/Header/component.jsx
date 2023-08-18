import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar/componetns";

const Header = () => {
    return (
        <div className="w-full h-12 bg-slate-500  ">
            <div className="flex justify-around">
                <div className="flex justify-beetwen w-3/5 gap-5">
                    <Link to={"/"}>LOGO</Link>
                    <NavBar />
                </div>
                <div className="flex gap-3">
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/registr"}>Registr</Link>
                    <div>Search</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
