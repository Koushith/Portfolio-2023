import styled from "styled-components";

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.8rem;
      /* or 175% */
      margin-bottom: 2rem;

      color: #a1a1aa;
    }
  }
`;
