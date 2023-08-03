import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-2">
            <h1>Home</h1>
            <Link to={"/movies"}>Movies</Link>
        </div>
    );
};

export default Header;
