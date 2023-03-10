import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 10rem;
  margin-top: 200px;
  margin-left: 2rem;
  margin-bottom: 200px;
  span {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.8rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: #14b8a6;
    }
  }

  .about {
    max-width: 63rem;

    .about-heading {
      font-weight: 700;
      font-size: 4.8rem;
      line-height: 5.6rem;
      /* or 117% */
      margin-bottom: 4rem;
      color: #f4f4f5;
    }

    .about-paragraph {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.8rem;
      /* or 175% */
      margin-bottom: 2rem;

      color: #a1a1aa;
    }
  }

  .links {
    img {
      aspect-ratio: 1/1;
      border-radius: 10px;
      width: 400px;

      transform: rotate(3deg);
      transition: all 0.3s;

      &:hover {
        transform: rotate(0deg);
      }
    }

    ul {
      list-style: none;
      margin-top: 5rem;
    }

    li {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.2rem;
    }

    .email-container {
      border-top: 1px solid rgba(63, 63, 70, 0.4);
      display: flex;

      gap: 1rem;
      margin-top: 3rem;

      li {
        margin-top: 2rem;
      }
    }
  }
`;
