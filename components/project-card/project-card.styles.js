import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  border: 1px solid rgba(63, 63, 70, 0.4);
  border-radius: 8px;
  padding: 2rem 1.6rem;
  transition: all 0.3s;
  min-width: 35rem;

  img {
    border: 5px solid #242528;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    height: 5rem;
    width: 5rem;
  }

  .project-name {
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 2.1rem;
    /* or 175% */

    color: #f4f4f5;
  }

  .project-description {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 21px;
    /* or 175% */
    margin-top: 0.6rem;
    color: #a1a1aa;
  }

  .links {
    display: flex;
    gap: 2rem;
    margin-top: 0.8rem;

    a {
      text-decoration: none;
      font-size: 1.4rem;
      line-height: 21px;
      color: #f4f4f5;

      font-weight: 400;
      transition: all 0.3s;
      &:hover {
        color: #2dd4bf;
      }
    }
  }

  &:hover {
    background-color: #242528;
  }
`;
