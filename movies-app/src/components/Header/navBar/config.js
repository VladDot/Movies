import { routes } from "../../../routes/routesConstants";

export const navBar = [
    {
        name: "movies",
        categories: [
            {
                name: "popular",
                url: routes.moviesCategory.popular,
            },
            { name: "now playing", url: "/popular" },
            { name: "upcoming", url: "/popular" },
            { name: "top rated", url: "/popular" },
        ],
    },
    {
        name: "tv shows",
        categories: [
            {
                name: "popular",
                url: "/popular",
            },
            { name: "airing today", url: "/popular" },
            { name: "on tv", url: "/popular" },
            { name: "top rated", url: "/popular" },
        ],
    },
    {
        name: "people",
        url: "/popular",
    },
];
