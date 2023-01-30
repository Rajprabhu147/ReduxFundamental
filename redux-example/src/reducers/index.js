import counterReducer from "./Counter";
import userReducer from "./User";
import { userSlice } from "../features/userProfile";
import { themeSlice } from "../features/theme";

import { combineReducers } from "redux";

const myReducers = combineReducers({
    counter: counterReducer,
    user: userReducer,
    userProfile: userSlice.reducer,
    theme: themeSlice.reducer
});

export default myReducers;