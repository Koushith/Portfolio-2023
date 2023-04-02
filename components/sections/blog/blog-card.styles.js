import styled from "styled-components";

export const BlogCardContainer = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 8rem;
  margin-bottom: 2rem;

  .blog-published-date {
    padding: 2rem 0;
    margin-left: 3rem;
  }

  .blog-info {
    padding: 2rem 4rem;
    border-radius: 8px;
    max-width: 70rem;
    transition: all 0.3s;
    cursor: pointer;

    .blog-desc {
      margin-top: 1rem;
    }

    &:hover {
      background-color: #252428;
    }
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    flex-direction: column;
    margin: 0 0 4rem 0;
    gap: 1px;

    .blog-published-date {
      padding: 0 0;
      margin-left: 0rem;
      margin-bottom: 1.2rem;
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
      border-left: 2px solid #a1a1aa;
      color: #a1a1aa;
      padding-left: 1rem;
    }

    .blog-info {
      border-radius: 8px;
      width: 100%;
      transition: all 0.3s;
      cursor: pointer;
      padding: 0;
      margin: 0;
      .blog-desc {
        margin-top: 1rem;
      }

      &:hover {
        background-color: transparent;
      }
    }
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    flex-direction: column;
    margin: 0 0 4rem 0;
    gap: 1px;

    .blog-published-date {
      padding: 0 0;
      margin-left: 0rem;
      margin-bottom: 1.2rem;
      font-weight: 400;
      font-size: 14px;
      line-height: 28px;
      border-left: 2px solid #a1a1aa;
      color: #a1a1aa;
      padding-left: 1rem;
    }

    .blog-info {
      border-radius: 8px;
      width: 100%;
      transition: all 0.3s;
      cursor: pointer;
      padding: 0;
      margin: 0;
      .blog-desc {
        margin-top: 1rem;
      }

      &:hover {
        background-color: transparent;
      }
    }
  }
`;
