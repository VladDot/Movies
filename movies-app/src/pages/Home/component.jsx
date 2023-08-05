import useGetData from "../../hooks/data";
import { getMoviesTrending, getSearchedMovies } from "../../utils/generateUrl";

const Home = () => {
    /*     console.log(getAllMovies("popular")); */
    //TODO обработать запроси на сервер Streeming, OnTv, ForRenr, InThreaters
    const trandingDayMovies = useGetData(getMoviesTrending("day"));
    const trandingWeekMovies = useGetData(getMoviesTrending("week"));
    const searchMovie = useGetData(getSearchedMovies("spider"));
    console.log({
        search: searchMovie,
        trandingDayMovies: trandingDayMovies,
        trandingWeekMovies: trandingWeekMovies,
    });

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
