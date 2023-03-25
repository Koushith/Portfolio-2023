import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 10rem;
  margin-top: 20rem;

  margin-bottom: 10rem;

  .about-image-desktop {
    display: none;
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
    /* max-width: 63rem; */

    .about-paragraph {
      margin-bottom: 2rem;
      margin-top: 4rem;
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
    .about-image-desktop {
      display: flex;
      width: 100%;
      img {
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: 10px;
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
    .about-image-desktop {
      display: flex;
      width: 100%;
      img {
        width: 100%;
        margin-bottom: 2rem;
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
