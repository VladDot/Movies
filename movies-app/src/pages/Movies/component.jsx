import useGetData from "../../hooks/data";
import { getAllMovies } from "../../utils/generateUrl";

const Movies = () => {
    const popularMovies = useGetData(getAllMovies("popular"));
    console.log({ popularMovies: popularMovies });
    return (
        <>
            <p>Movies</p>
        </>
    );
};

export default Movies;
