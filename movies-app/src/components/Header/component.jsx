import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-56 bg-slate-500">
            <div className="flex justify-around">
                <div className="flex gap-3">
                    <Link to={"/"}>LOGO</Link>
                    <Link to={"/movies"}>Movies</Link>
                    <Link to={"/tvShow"}>TV Show</Link>
                    <Link to={"/people"}>Popular People</Link>
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
