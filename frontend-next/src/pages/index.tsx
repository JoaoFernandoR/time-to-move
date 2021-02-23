import Head from "next/head";

import { Container, SectionProfile, LeftContainer } from "./styles";

import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <Container>
      <Head>
        <title> início | move.it </title>
      </Head>
      <ExperienceBar />
      <SectionProfile>
        <LeftContainer>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </LeftContainer>
        <div></div>
      </SectionProfile>
    </Container>
  );
}
