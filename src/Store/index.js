import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { snackbarReducer } from "./Snackbar/reducer";
import { accountDetailsReducer } from "./AccounDetail/reducer";

const rootReducer = combineReducers({
  SnackbarData: snackbarReducer,
  AccountDetails: accountDetailsReducer,
});

export function configureStore() {
  const middlewares = [thunkMiddleware];

  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
