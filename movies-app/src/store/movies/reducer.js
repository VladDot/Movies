import {
    MOVIES_NOW_PLAYING,
    MOVIES_TOP_RATED,
    MOVIES_UPCOMING,
    POPULAR_MOVIES,
} from "../types";

const initialMoviesState = {
    popularMovies: [],
    upcomingMovies: [],
    topRateMovies: [],
    nowPlayingMovies: [],
};

export const moviState = (state = initialMoviesState, action) => {
    switch (action.type) {
        case POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: [...action.payload],
            };
        case MOVIES_UPCOMING:
            return {
                ...state,
                upcomingMovies: [...action.payload],
            };
        case MOVIES_TOP_RATED:
            return {
                ...state,
                topRateMovies: [...action.payload],
            };
        case MOVIES_NOW_PLAYING:
            return {
                ...state,
                nowPlayingMovies: [...action.payload],
            };
        default:
            return state;
    }
};
