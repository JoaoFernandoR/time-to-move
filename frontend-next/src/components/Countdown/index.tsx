import { useState, useEffect } from "react";

import { Container, ContainerNumber, SpanPontoVirgula, Anchor } from "./styles";

const Countdown = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountDown = () => {
    setActive(true);
  };

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <Container>
        <ContainerNumber>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </ContainerNumber>

        <SpanPontoVirgula>:</SpanPontoVirgula>

        <ContainerNumber>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </ContainerNumber>
      </Container>

      <Anchor type="button" onClick={startCountDown}>
        Iniciar um ciclo
      </Anchor>
    </div>
  );
};

export default Countdown;
