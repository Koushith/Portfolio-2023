"use client";

import styled from "styled-components";

export const HeroSectionContainer = styled.section`
  .hero-content {
    margin-top: 200px;
    max-width: 726px;
    margin-left: 2.6rem;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid rgba(45, 212, 191, 1);
  }

  h1 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 5.6rem;
    margin-top: 4.2rem;
    color: #f4f4f5;
  }

  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.8rem;
    /* or 175% */
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
  /* BELOW 544px (Phones) */
  /**************************/
  @media (max-width: 34em) {
    h1 {
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 4.2rem;
      margin-top: 4.2rem;
      color: #f4f4f5;
    }
    p {
      margin-top: 2rem;
    }
  }
`;
