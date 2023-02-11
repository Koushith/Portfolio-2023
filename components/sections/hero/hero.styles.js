"use client";

import styled from "styled-components";

export const HeroSectionContainer = styled.section`
  .hero-content {
    margin-top: 150px;
    max-width: 726px;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid rgba(45, 212, 191, 1);
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    margin-top: 42px;
    color: #f4f4f5;
  }

  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.8rem;
    /* or 175% */
    margin-top: 26px;
    color: #a1a1aa;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 24px;
    margin-top: 26px;
  }
`;
