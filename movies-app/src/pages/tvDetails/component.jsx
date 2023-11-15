import React from "react";
import useGetData from "../../hooks/useSetDataRedux";
import { getTv } from "../../utils/generateUrl";
import { useParams } from "react-router-dom";

const TVPage = () => {
    const params = useParams();
    const tvPage = useGetData(getTv(params.tvId));
    console.log({ tvPage: tvPage });
    return (
        <>
            <p>TV Pagessssssssssss</p>
        </>
    );
};

export default TVPage;
