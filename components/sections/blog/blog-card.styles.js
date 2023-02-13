import styled from "styled-components";

export const BlogCardContainer = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 8rem;
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
`;
