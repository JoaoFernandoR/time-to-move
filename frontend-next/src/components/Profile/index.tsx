import { Container, ContainerInfo } from "./styles";

const Profile = () => {
  return (
    <Container>
      <img
        src="https://github.com/joaofernandor.png"
        alt=" Joao Fernando Ribeiro"
      />
      <ContainerInfo>
        <strong>João Fernando Ribeiro</strong>
        <p>
          <img src="icons/level.svg" alt=" Level" />
          Level 1
        </p>
      </ContainerInfo>
    </Container>
  );
};

export default Profile;
