import React from "react";
import { getMovie } from "../../utils/generateUrl";
import useGetData from "../../hooks/data";

const MoviPage = () => {
    const popular = useGetData(getMovie("3"));
    console.log(popular);
    return (
        <>
            <p>MoviePage</p>
        </>
    );
};

export default MoviPage;
