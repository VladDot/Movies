import { POPULAR_PEOPLE } from "../types";

export const setPopularPeoples = (payload) => ({
    type: POPULAR_PEOPLE,
    payload,
});
