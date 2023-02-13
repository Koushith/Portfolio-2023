import styled from "styled-components";

export const BlogSectionContainer = styled.section`
  .heading {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 5.6rem;
    /* or 117% */
    margin-top: 10rem;
    color: #f4f4f5;
    max-width: 673px;
  }

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

    .blog-card {
      margin-left: 2rem;
      display: flex;
      align-items: flex-start;
      gap: 14.6rem;
      margin-bottom: 2rem;
      .blog-published-date {
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        /* identical to box height, or 200% */
        padding: 2rem 0;
        color: #a1a1aa;
      }

      .blog-info {
        padding: 2rem 4rem;
        border-radius: 8px;
        max-width: 70rem;
        transition: all 0.3s;
        cursor: pointer;
        .blog-title {
          font-weight: 600;
          font-size: 14px;
          line-height: 28px;
          /* identical to box height, or 200% */

          color: #f4f4f5;
        }

        .blog-desc {
          font-weight: 400;
          font-size: 14px;
          line-height: 28px;
          /* or 200% */
          margin-top: 1.2rem;
          color: #a1a1aa;
        }

        .read-more {
          font-weight: 500;
          font-size: 14px;
          line-height: 28px;
          /* identical to box height, or 200% */
          margin-top: 1rem;
          color: #2dd4bf;
          display: inline-block;
          text-decoration: none;
        }

        &:hover {
          background-color: #211e22;
        }
      }
    }
  }
`;
