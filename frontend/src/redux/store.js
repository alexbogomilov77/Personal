import { createStore, compose, applyMiddleware } from "redux";
import combinedReducers from "./reducers/combined.reducer";
import thunk from "redux-thunk";
// import testMiddleware from "./middlewares/testMiddleware.mw.js";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinedReducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancer(applyMiddleware(thunk))
  // composeEnhancer(applyMiddleware(thunk, testMiddleware))
);

export default store;
