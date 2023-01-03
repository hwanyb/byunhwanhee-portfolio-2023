import { combineReducers } from "redux";

import modeReducer from "./modeReducer";

const rootReducer = combineReducers({
    modeReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;