import useGetData from "../../hooks/data";
import { getPeople } from "../../utils/generateUrl";

const PopularPeople = () => {
    const popularPeople = useGetData(getPeople());
    console.log({ popularPeople: popularPeople });
    return (
        <>
            <p>Popular Peoplle</p>
        </>
    );
};

export default PopularPeople;
