import styled from "styled-components";

export const ProjectSectionContainer = styled.section`
  .heading-container {
    max-width: 76rem;

    .heading {
      font-size: 4.8rem;
      line-height: 5.6rem;
      /* or 117% */

      color: #f4f4f5;
    }

    .sub-heading {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.8rem;
      color: #a1a1aa;
      margin-top: 2rem;
    }
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5rem;
    margin-bottom: 10rem;
    column-gap: 1.6rem;
    row-gap: 4rem;
  }

  .project-card {
    border: 1px solid rgba(63, 63, 70, 0.4);
    border-radius: 8px;
    padding: 2rem 1.6rem;
    transition: all 0.3s;
    min-width: 35rem;

    img {
      border: 5px solid #242528;
      border-radius: 50%;
    }

    .project-name {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      /* or 175% */
      margin-top: 2.2rem;
      color: #f4f4f5;
    }

    .project-description {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      /* or 175% */
      margin-top: 1rem;
      color: #a1a1aa;
    }

    .links {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;
      a {
        text-decoration: none;
        font-size: 16px;
        line-height: 28px;
        color: #f4f4f5;
        line-height: 28px;
        font-size: 1.6rem;
        font-weight: 500;
        transition: all 0.3s;
        &:hover {
          color: #2dd4bf;
        }
      }
    }

    &:hover {
      background-color: #242528;
    }
  }
`;
