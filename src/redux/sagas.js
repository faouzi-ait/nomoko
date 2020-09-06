import { all } from "redux-saga/effects";
import { propertiesLoadingSaga } from "./saga/properties";

export function* rootSaga() {
  yield all([propertiesLoadingSaga()]);
}
