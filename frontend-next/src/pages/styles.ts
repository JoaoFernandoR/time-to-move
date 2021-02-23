import styled from "styled-components";

export const Container = styled.section`
  max-width: 992px;
  margin: auto;
  height: 100vh;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div``;

export const SectionProfile = styled.section`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;
`;
