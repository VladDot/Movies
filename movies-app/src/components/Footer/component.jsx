import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-blue-300">
            <div>LOGO</div>
            <Link to={"/registr"}>Registr</Link>
            <div>Menu</div>
        </div>
    );
};

export default Footer;
