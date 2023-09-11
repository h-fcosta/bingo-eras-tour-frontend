import { combineReducers } from "redux";
import albumReducer from "./albumReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
  albums: albumReducer,
  status: statusReducer
});

export default rootReducer;
