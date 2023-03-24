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
`;
