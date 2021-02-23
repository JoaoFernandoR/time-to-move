import styled from "styled-components";

import {
  background,
  title,
  white,
  blue,
  blueDark,
} from "../../shared/Colors/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-family: "Rajdhani";
  font-weight: 600;
  background: ${background};

  color: ${title};
`;

export const ContainerNumber = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span {
    flex: 1;

    &:first-child {
      border-right: 1px solid #f0f1f3;
    }

    &:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`;

export const SpanPontoVirgula = styled.span`
  font-size: 6.25rem;
  margin: 0 0.5rem;
`;

export const Anchor = styled.button`
  width: 100%;
  background: ${blue};
  border-radius: 5px;
  height: 5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  color: ${white};
  font-size: 1.2rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.4s;

  &:hover {
    cursor: pointer;
    background: ${blueDark};
  }
`;
