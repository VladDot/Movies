import { useParams } from "react-router-dom";
import useGetData from "../../hooks/data";
import { getMovie } from "../../utils/generateUrl";

const MovieDetails = () => {
    const params = useParams();
    const movieDetails = useGetData(getMovie(params.movieId));
    console.log(params.movieId);
    console.log({ movieDetails: movieDetails });
    return (
        <>
            <p>Movies</p>
        </>
    );
};

export default MovieDetails;
