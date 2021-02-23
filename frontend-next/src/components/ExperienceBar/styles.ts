import styled from "styled-components";

import { grayLine, green } from "../../shared/Colors/colors";

interface IBarraCurrentProgress {
  currentProgress: number;
}

export const BarraHeader = styled.header`
  display: flex;
  align-items: center;
`;

export const BarraText = styled.span`
  font-size: 1rem;
`;

export const Barra = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${grayLine};
  margin: 0 1.5rem;
  position: relative;
`;

export const BarraCurrentProgress = styled.div<IBarraCurrentProgress>`
  height: 4px;
  border-radius: 4px;
  background: ${green};
  width: ${({ currentProgress }) => (currentProgress / 600) * 100}%;
`;

export const TextCurrentProgress = styled.span`
  position: absolute;
  transform: translateX(700%);
  top: 12px;
`;
