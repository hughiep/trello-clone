import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

const createReducers = (history) => combineReducers({
  router: connectRouter(history)
});

export default createReducers;