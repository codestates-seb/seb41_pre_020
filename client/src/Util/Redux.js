import { combineReducers, createStore } from 'redux';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT = 'LOGOUT';
const QUESTION = 'QUESTION';
const SEARCH_GEN = 'SEARCH_GEN';
const SEARCH_TAG = 'SEARCH_TAG';

export const loginAction = (res) => {
    return {
        type: LOGIN_USER,
        payload: res,
    };
};

export const logoutAction = () => {
    return {
        type: LOGOUT,
    };
};

export const questionAction = (res) => {
    return {
        type: QUESTION,
        payload: res,
    };
};

export const searchGenAction = (res) => {
    return {
        type: SEARCH_GEN,
        payload: res,
    };
};
export const searchTagAction = (res) => {
    return {
        type: SEARCH_TAG,
        payload: res,
    };
};

export const askTitleAction = (res) => {
    return {
        type: 'TITLE',
        payload: res,
    };
};

export const askBodyAction = (res) => {
    return {
        type: 'BODY',
        payload: res,
    };
};

export const askTagsAction = (res) => {
    return {
        type: 'TAGS',
        payload: res,
    };
};

const initialstate = {
    isLogin: false,
    question: null,
    searchGen: '',
    searchTag: '',
    ask: {
        title: null,
        body: null,
        tags: [],
    },
};

const loginReducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                isLogin: true,
                id: action.payload,
            };
        case LOGOUT:
            return {
                isLogin: false,
            };
        default:
            return state;
    }
};

const questionReducer = (state = initialstate, action) => {
    switch (action.type) {
        case QUESTION:
            return {
                question: action.payload,
            };
        default:
            return state;
    }
};

const searchReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SEARCH_GEN:
            return {
                searchGen: action.payload,
            };
        case SEARCH_TAG:
            return {
                searchTag: action.payload,
            };
        default:
            return state;
    }
};

const askReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'TITLE':
            return {
                ...state,
                title: action.payload,
            };
        case 'BODY':
            return {
                ...state,
                body: action.payload,
            };
        case 'TAGS':
            return {
                ...state,
                tags: action.payload,
            };
        default:
            return state;
    }
};

const combinedReducer = combineReducers({
    loginReducer,
    questionReducer,
    searchReducer,
    askReducer,
});

const store = createStore(combinedReducer);

export default store;