import { PROPERTIES } from "../types";

/* LOAD THE LIST OF ALL SCREEMS */
export const loadProperties = () => ({
  type: PROPERTIES.LOAD,
});

export const setProperties = (list) => ({
  type: PROPERTIES.LOAD_SUCCESS,
  list,
});

export const setError = (error) => ({
  type: PROPERTIES.LOAD_FAIL,
  error,
});

export const loadUniquePropertiesTypes = (types) => ({
  type: PROPERTIES.LOAD_PROPERTIES_TYPES,
  types
});
