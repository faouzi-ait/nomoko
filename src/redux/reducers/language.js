import { SET_LANGUAGE } from "../types";

export const languageTheme = (state = "", action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      localStorage.setItem("language", action.lang);
      return {
        ...state,
        state: action.lang,
      };
    default:
      return state;
  }
};
