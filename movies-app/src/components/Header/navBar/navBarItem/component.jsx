import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBarItem = ({ name, categories, url }) => {
    const [isActiveCategory, setIsActiveCategory] = useState(false);

    return (
        <>
            {!categories && <Link to={url}>{name}</Link>}
            {categories && (
                <div>
                    <p
                        onClick={() => setIsActiveCategory(!isActiveCategory)}
                        className="w-24 inline-block"
                    >
                        {name}
                    </p>
                    <div
                        className={
                            isActiveCategory
                                ? "block border-2 border-black bg-blue-500"
                                : "hidden "
                        }
                    >
                        {categories.map(({ name, url }, idx) => (
                            <Link
                                className="text-red-500 flex flex-col absolut "
                                to={url}
                                key={`${name}-${idx}`}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBarItem;
