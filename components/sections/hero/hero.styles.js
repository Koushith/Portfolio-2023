"use client";

import styled from "styled-components";

export const HeroSectionContainer = styled.section`
  .hero-content {
    margin-top: 140px;
    max-width: 726px;

    .hero-title {
      margin-top: 4.2rem;
    }
  }

  li {
    border: 1px solid rgba(63, 63, 70, 0.4);
    border-radius: 4px;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
    i {
      font-size: 18px;
      cursor: pointer;

      &:hover {
        color: #2dd4bf;
      }
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid rgba(45, 212, 191, 1);
  }

  .description {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.8rem;
    margin-top: 2.6rem;
    color: #a1a1aa;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 24px;
    margin-top: 26px;
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    padding: 0 2rem 0 2rem;

    .hero-content {
      margin-top: 15rem;
    }
    .hero-title {
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 4rem;
      margin-top: 2.6rem !important;

      color: #f4f4f5;
    }
    p {
      margin-top: 1rem !important;
    }
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/
  @media (max-width: 34em) {
    padding: 0 2rem 0 2rem;

    .hero-content {
      margin-top: 10rem;
    }
    .hero-title {
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 4rem;
      margin-top: 2.6rem !important;

      color: #f4f4f5;
    }
    p {
      margin-top: 1rem !important;
    }
  }
`;
