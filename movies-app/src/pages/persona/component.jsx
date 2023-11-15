import React from "react";
import useGetData from "../../hooks/data";
import { getPerson } from "../../utils/generateUrl";

const Persone = () => {
    const person = useGetData(getPerson("5"));
    console.log({ persone: person });
    return <div>Person</div>;
};

export default Persone;
