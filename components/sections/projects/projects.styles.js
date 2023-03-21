import styled from "styled-components";

export const ProjectSectionContainer = styled.section`
  .heading-container {
    max-width: 76rem;
    margin-top: 200px;
    margin-left: 2rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5rem;
    margin-bottom: 10rem;
    column-gap: 1.6rem;
    row-gap: 4rem;
  }
`;
