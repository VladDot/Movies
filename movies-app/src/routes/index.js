import React from "react";
import { Route, Routes as RoutesReact } from "react-router-dom";

import { routes } from "./routesConstants";
import Home from "../pages/Home/component";
import Login from "../pages/Login/component";
import Registr from "../pages/Registr/component";
import Movies from "../pages/Movies/component";
import TVShow from "../pages/TVShow/component";
import PopularPeople from "../pages/PopularPeople/component";
import TVPage from "../pages/TVPage/component";
import MoviPage from "../pages/MoviPage/component";
import MovieDetails from "../pages/movieDetails/component";

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
                path={routes.tvPage}
                element={<TVPage />}
            />
            <Route
                path={routes.moviePage}
                element={<MoviPage />}
            />
        </RoutesReact>
    );
};

export default Routes;
