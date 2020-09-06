import React from "react";
import { LOCALES } from "../i18n/constants";
import { setLanguage } from "../redux/actions/set_language";
import { useDispatch } from "react-redux";
import { Container, Language } from "../styled-components/utilities";

function ToggleOptions() {
  const dispatch = useDispatch();

  return (
    <Container top="2rem" left="2rem">
      <Language>
        <span onClick={() => dispatch(setLanguage(LOCALES.ENGLISH))}>
          <img src="./icons/UK.png" alt="UK" />
        </span>
        <span onClick={() => dispatch(setLanguage(LOCALES.GERMAN))}>
          <img src="./icons/DE.png" alt="Germany" />
        </span>
      </Language>
    </Container>
  );
}

export default ToggleOptions;
