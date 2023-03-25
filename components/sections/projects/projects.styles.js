import styled from "styled-components";

export const ProjectSectionContainer = styled.section`
  .heading-container {
    max-width: 76rem;
    margin-top: 4rem;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5rem;
    margin-bottom: 10rem;
    column-gap: 1.6rem;
    row-gap: 4rem;
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    padding-left: 2rem;
    padding-right: 2rem;
    .projects-container {
      grid-template-columns: repeat(2, 1fr);

      column-gap: 1.6rem;
      row-gap: 4rem;
    }
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    /* background-color: green; */

    padding-left: 2rem;
    padding-right: 2rem;
    .projects-container {
      grid-template-columns: repeat(1, 1fr);

      column-gap: 1.6rem;
      row-gap: 4rem;
    }
  }
`;
