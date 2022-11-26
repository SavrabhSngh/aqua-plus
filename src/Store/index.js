import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { accountDetailsReducer } from "./AccounDetail/reducer";
import { customerDetailsReducer } from "./CustomerDetails/reducer";
import { snackbarReducer } from "./Snackbar/reducer";

const rootReducer = combineReducers({
  AccountDetails: accountDetailsReducer,
  CustomerDetails: customerDetailsReducer,
  SnackbarData: snackbarReducer,
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
