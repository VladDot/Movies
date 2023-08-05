import { POPULAR_PEOPLE } from "../types";

const initialPeoplesState = {
    popularPeople: [],
};

export const peopleState = (state = initialPeoplesState, action) => {
    switch (action.type) {
        case POPULAR_PEOPLE:
            return {
                ...state,
                popularPeople: [...action.payload],
            };

        default:
            return state;
    }
};
