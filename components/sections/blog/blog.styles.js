import styled from "styled-components";

export const BlogSectionContainer = styled.section`
  margin: 6rem 2rem 2rem 2rem;
  .sub-heading {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.8rem;
    /* or 175% */
    margin-top: 3rem;
    color: #a1a1aa;
    max-width: 673px;
  }

  .blog-list-container {
    border-left: 1px solid rgba(63, 63, 70, 0.4);
    margin-top: 6.6rem;
    margin-bottom: 12rem;
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    max-width: 100%;
    .blog-list-container {
      border: none;
    }
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    max-width: 100%;
    .blog-list-container {
      border: none;
    }
  }
`;
