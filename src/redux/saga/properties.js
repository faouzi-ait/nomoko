import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  setProperties,
  setError,
  loadUniquePropertiesTypes,
} from "../actions/load_properties";
import { PROPERTIES } from "../types";
import { fetchProperties } from "../../api/apiCalls";

const properties_types = (state) => state.properties.list;

function* fetchPropertiesSaga() {
  try {
    // FIRST WE LOAD THE LIST OF PROPERTIES
    const properties = yield call(fetchProperties);
    yield put(setProperties(properties));

    // THEN WE BUILD THE UNIQUE LIST OF PROPERTIES TYPES
    const types = yield select(properties_types);
    const filteredUniquePropertiesTypes = [
      ...new Set(types.map((items) => items.BuildingType)),
    ];
    yield put(loadUniquePropertiesTypes(filteredUniquePropertiesTypes));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* propertiesLoadingSaga() {
  yield takeEvery(PROPERTIES.LOAD, fetchPropertiesSaga);
}
