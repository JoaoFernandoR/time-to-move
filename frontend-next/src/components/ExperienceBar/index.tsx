import { useState } from "react";

import {
  BarraHeader,
  BarraText,
  Barra,
  BarraCurrentProgress,
  TextCurrentProgress,
} from "./styles";

const ExperienceBar = () => {
  const [currentProgress, setCurrentProgress] = useState(300);

  return (
    <BarraHeader>
      <BarraText>0 xp</BarraText>
      <Barra>
        <BarraCurrentProgress currentProgress={currentProgress} />
        <TextCurrentProgress>{`${currentProgress} xp`}</TextCurrentProgress>
      </Barra>
      <BarraText>600 xp</BarraText>
    </BarraHeader>
  );
};

export default ExperienceBar;
