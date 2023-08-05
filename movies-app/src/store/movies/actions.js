import { POPULAR_MOVIES, MOVIES_UPCOMING } from "../types";

export const setPopularMovies = (payload) => ({
    type: POPULAR_MOVIES,
    payload,
});
export const setUpcomingMovies = (payload) => ({
    type: MOVIES_UPCOMING,
    payload,
});

export const setTopRateMovies = (payload) => ({
    type: MOVIES_TOP_RATED,
    payload,
});
export const setNowPlayingMovies = (payload) => ({
    type: MOVIES_NOW_PLAYING,
    payload,
});
