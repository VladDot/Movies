import React from "react";
import useGetData from "../../hooks/data";
import { getAllTv } from "../../utils/generateUrl";

const TVShow = () => {
    const popularTv = useGetData(getAllTv("on_the_air"));
    const topRatred = useGetData(getAllTv("top_rated"));
    console.log({ popular: popularTv, top: topRatred });
    return (
        <>
            <p>TV Show</p>
        </>
    );
};

export default TVShow;
