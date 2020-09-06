import React from "react";
import styled from "styled-components";

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000;
`;

function Page({ children, ...rest }) {
  return <MainPage {...rest}>{children}</MainPage>;
}

export default Page;
