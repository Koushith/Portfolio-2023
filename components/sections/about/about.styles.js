import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 10rem;
  margin-top: 6rem;

  margin-bottom: 2rem;

  .about-image-desktop {
    display: none;
  }

  ol {
    margin-left: 1.4rem;
    font-size: 1.4rem;
    margin-top: 1rem;
    line-height: 28px;
  }

  span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.8rem;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: #14b8a6;
    }
  }

  .about {
    max-width: 63rem;

    .about-paragraph {
      margin-bottom: 2rem;
      margin-top: 2.2rem;
    }
  }

  .links {
    img {
      aspect-ratio: 1/1;
      border-radius: 10px;
      width: 100%;
      filter: grayscale(1);
      transform: rotate(3deg);
      transition: all 0.3s;
      width: 300px;
      &:hover {
        transform: rotate(0deg);
        filter: grayscale(0);
      }
    }

    ul {
      list-style: none;
      margin-top: 5rem;
    }

    li,
    a {
      text-decoration: none;
      color: #a1a1aa;
      display: flex;
      align-items: center;
      gap: 1.2rem;
      margin-bottom: 1.2rem;
      i {
        font-size: 18px;
      }

      &:hover {
        color: #14b8a6;
      }
    }

    .email-container {
      border-top: 1px solid rgba(63, 63, 70, 0.4);
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: 3rem;

      li {
        margin-top: 2rem;
      }
    }
  }
  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/
  @media (max-width: 59em) {
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0rem;
    margin-bottom: 2rem;

    .about {
      margin-top: 2rem;
    }
    .about-image-desktop {
      display: flex;
      /* width: 100%; */
      img {
        width: 300px;
        aspect-ratio: 1/1;
        filter: grayscale(1);
        border-radius: 10px;
        margin-bottom: 2rem;
      }
    }

    .links {
      img {
        display: none;
      }
    }
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    gap: 1rem;
    align-self: flex-start;
    justify-content: flex-start;

    .about {
      margin-top: 2rem;
    }

    .about-image-desktop {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      img {
        width: 200px;
        margin-bottom: 2rem;
        filter: grayscale(1);
      }
    }
    .about-container {
      display: flex !important;
      flex-direction: column;
    }

    .links {
      width: 100%;
      img {
        display: none;
      }

      ul {
        margin-top: 1rem;
      }
    }
  }
`;
