"use client";

import styled from "styled-components";

export const HeroSectionContainer = styled.section`
  .hero-content {
    margin-top: 200px;
    max-width: 726px;
    margin-left: 2.6rem;
  }

  li {
    border: 1px solid rgba(63, 63, 70, 0.4);
    border-radius: 4px;
    width: 4.2rem;
    height: 4.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
    i {
      font-size: 24px;
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
