import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: ${(prop) => prop.top};
  left: ${(prop) => prop.left};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 99999;
`;

export const Language = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-right: 1rem;
    cursor: pointer;

    img {
      width: 32px;
      height: 24px;
    }
  }
`;
