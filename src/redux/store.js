import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import { languageTheme } from "./reducers/language";
import { properties, loading } from "./reducers/properties_reducers";
const combinedReducers = combineReducers({
  languageTheme,
  loading,
  properties,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(sagaMiddleware),
  )
);

export default store;
sagaMiddleware.run(rootSaga);
