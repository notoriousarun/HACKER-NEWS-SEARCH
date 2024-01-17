export const appReducer = (state, action) => {
    switch (action.type) {
        case "SET_POSTS_DATA":
            return {...state, data: action.payload };
        case "UPDATE_QUERY":
            return {...state, query: action.payload, page: 0 };
        case "UPDATE_TAG_FILTER":
            return {...state, tagFilter: action.payload.tagFilter, page: 0 };
        case "UPDATE_SORT_FILTER":
            return {...state, sortFilter: action.payload.sortFilter, page: 0 };
        case "UPDATE_NUM_FILTER":
            return {...state, numericFilter: action.payload.numericFilter, page: 0 };
        case "UPDATE_FROM_DATE":
            return {...state, fromDate: action.payload, page: 0 };
        case "UPDATE_TO_DATE":
            return {...state, toDate: action.payload, page: 0 };
        case "UPDATE_PAGE":
            return {...state, page: action.payload.page, active: action.payload.active };
        case "FETCH_SUCCESS":
            return {
                ...state,
                data: action.payload.data,
                nbHits: action.payload.nbHits,
                processingTimeMS: action.payload.processingTimeMS,
                page: action.payload.page,
                nbPages: action.payload.nbPages,
            };
        case "SHOW_MENU":
            return {
                ...state,
                menu1: action.payload.menu1,
                menu2: action.payload.menu2,
                menu3: action.payload.menu3,
            };
        case "SHOW_CALENDAR":
            return {
                ...state,
                showCalender: action.payload.showCalender,
                fromDate: action.payload.fromDate,
            };
        default:
            return state;
    }
};