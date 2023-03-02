import styled from "styled-components";

export const BlogWorkContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
  /* border: 1px solid red; */
  margin-top: 1.2rem;
`;

export const BlogsContainer = styled.div`
  /* border: 1px solid red; */
`;

export const WorkContainer = styled.div`
  border: 1px solid rgba(63, 63, 70, 0.4);
  border-radius: 10px;
  min-width: 41rem;
  h2 {
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    /* or 200% */
    margin-bottom: 2.2rem;

    color: #f4f4f5;
  }

  .experience-container {
    padding: 2rem;

    .company-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.6rem;
      max-height: 4.8rem;
      .year {
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
        /* identical to box height, or 200% */

        display: flex;
        align-items: center;

        color: #a1a1aa;
      }

      .company-info {
        display: flex;
        gap: 1.2rem;
        align-self: flex-start;

        .logo {
          height: 40px;
          width: 40px;
          border: 5px solid rgba(63, 63, 70, 0.4);
          border-radius: 50%;
        }

        .company-name {
          font-size: 14px;
          line-height: 28px;
          /* or 200% */

          display: flex;
          align-items: center;

          color: #f4f4f5;
        }

        .job-title {
          font-weight: 400;
          font-size: 14px;
          line-height: 28px;
          /* or 200% */
          margin-top: -0.8rem;
          display: flex;
          align-items: center;

          color: #a1a1aa;
        }
      }
    }
  }
`;

export const BlogCard = styled.article`
  transition: all 0.3s;
  padding: 3.2rem 4rem 3.2rem 2.6rem;
  border-radius: 8px;
  min-width: 580px;
  cursor: pointer;
  .published-date {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    /* identical to box height, or 200% */
    border-left: 2px solid #a1a1aa;
    color: #a1a1aa;
    padding-left: 1rem;
  }

  .blog-title {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    /* identical to box height, or 200% */
    margin: 1.2rem 0 0.8rem 0;
    color: #f4f4f5;
  }

  .blog-desc {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    /* or 200% */
    margin-bottom: 1.2rem;
    color: #a1a1aa;
  }

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    /* identical to box height, or 200% */
    text-decoration: none;
    color: #2dd4bf;
  }

  &:hover {
    background-color: #242528;
  }
`;
