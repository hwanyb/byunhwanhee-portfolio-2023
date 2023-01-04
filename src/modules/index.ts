import { combineReducers } from "redux";

import modeReducer from "./modeReducer";
import homeViewReducer from "./homeViewReducer";

const rootReducer = combineReducers({
    modeReducer,
    homeViewReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;