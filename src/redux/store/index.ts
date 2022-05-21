import { applyMiddleware, combineReducers, compose, Reducer } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import patientsReducer from "../reducers/patientsReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeThatAlwaysWorks =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

declare module "redux" {
  interface Dispatch<A extends Action = AnyAction> {
    <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
  }
}

export const initialState = {
  patients: {
    patients: [],
    errorCode: null,
  },
};

const rootReducer = combineReducers({
  patients: patientsReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer);

export let configureStore = createStore(
  persistedReducer,
  initialState as any,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);

export const persistor = persistStore(configureStore);
