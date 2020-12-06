import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore } from "redux";
import history from "../history";
import createReducers from "./reducer";

const configStore = () => {
  const middleware = [routerMiddleware(history)];

  let composeEnhancers = compose;
  if (process.env.NODE_ENV !== "production") {
    const { logger } = require("redux-logger");
    middleware.push(logger);
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const reducer = createReducers(history);
  const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));

  return store;
};

export default configStore;
