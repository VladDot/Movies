import { connect } from "react-redux";

import useGetData from "../../hooks/data";
import useSetDataRedux from "../../hooks/useSetDataRedux";
import {
    setTrendingDayMovies,
    setTrendingWeekMovies,
    setPopularMovies,
} from "../../store/movies/actions";
import { setPopularPeoples } from "../../store/people/action";
import { setPopularTVShow } from "../../store/tvShow/action";
import {
    getPopular,
    getMoviesTrending,
    getSearchedMovies,
} from "../../utils/generateUrl";

const Home = ({
    setTrendingDayMovies,
    trandingDayMovies,
    setTrendingWeekMovies,
    trandingWeekMovies,
    setPopularMovies,
    popularMovies,
    setPopularPeoples,
    popularPeoples,
    setPopularTVShow,
    popularTvShows,
}) => {
    useSetDataRedux(getMoviesTrending("day"), setTrendingDayMovies);
    useSetDataRedux(getMoviesTrending("week"), setTrendingWeekMovies);
    useSetDataRedux(getPopular("movie"), setPopularMovies);
    useSetDataRedux(getPopular("person"), setPopularPeoples);
    useSetDataRedux(getPopular("tv"), setPopularTVShow);

    //TODO обработать запроси на сервер popularTV, popularMovie, popularPeople

    const searchMovie = useGetData(getSearchedMovies("spider"));

    const popularTV = useGetData(getPopular("tv"));
    const popularPeople = useGetData(getPopular("person"));
    /*     console.log({
        search: searchMovie,
        trandingDayMovies: trandingDayMovies,
        trandingWeekMovies: trandingWeekMovies,
        popularTV: popularTV,
        popularMovies: popularMovies,
        popularPeople: popularPeople,
    }); */

    return (
        <div>
            <h1>Home</h1>
            <div className={`${trandingDayMovies.loading ? "bg-red-500" : ""}`}>
                <h1>SLIDER</h1>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    trandingDayMovies: state.moviState.trendingDayMovies,
    trandingWeekMovies: state.moviState.trendingWeekMovies,
    popularMovies: state.moviState.popularMovies,
    popularPeoples: state.peopleState.popularPeoples,
    popularTvShows: state.tvShowState.popularTvShows,
});

const mapDispatchToProps = {
    setTrendingDayMovies,
    setTrendingWeekMovies,
    setPopularMovies,
    setPopularPeoples,
    setPopularTVShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
