import React from "react";
import { Route, Routes as RoutesReact } from "react-router-dom";

import { routes } from "./routesConstants";

import Registr from "../pages/registr/component";
import Movies from "../pages/movies/component";
import TVShow from "../pages/tvShow/component";
import PopularPeople from "../pages/popularPeople/component";

import MoviPage from "../pages/moviPage/component";
import MovieDetails from "../pages/movieDetails/component";
import Login from "../pages/login/component";
import Persone from "../pages/persona/component";
import Home from "../pages/home/component";
import TVPage from "../pages/tvDetails/component";
import Error from "../pages/error/component";

const Routes = () => {
    return (
        <RoutesReact>
            <Route
                path={routes.home}
                element={<Home />}
            />
            <Route
                path={routes.login}
                element={<Login />}
            />
            <Route
                path={routes.registration}
                element={<Registr />}
            />
            <Route
                path={routes.movies}
                element={<Movies />}
            />
            <Route
                path={routes.movieDetails}
                element={<MovieDetails />}
            />
            <Route
                path={routes.tvShow}
                element={<TVShow />}
            />
            <Route
                path={routes.people}
                element={<PopularPeople />}
            />
            <Route
                path={routes.persone}
                element={<Persone />}
            />
            <Route
                path={routes.tvDetails}
                element={<TVPage />}
            />
            <Route
                path={routes.moviePage}
                element={<MoviPage />}
            />
            <Route
                path={routes.error}
                element={<Error />}
            />
        </RoutesReact>
    );
};

export default Routes;
