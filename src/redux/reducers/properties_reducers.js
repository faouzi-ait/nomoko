import { PROPERTIES } from "../types";

const initialState = {
  list: [],
};

export const properties = (state = initialState, action) => {
  switch (action.type) {
    case PROPERTIES.LOAD_SUCCESS:
      return { ...state, list: action.list };
    case PROPERTIES.LOAD_PROPERTIES_TYPES:
      return { ...state, types: action.types };
    case PROPERTIES.LOAD_FAIL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const loading = (state = false, action) => {
  switch (action.type) {
    case PROPERTIES.LOAD:
      return true;
    case PROPERTIES.LOAD_SUCCESS:
      return false;
    case PROPERTIES.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};
