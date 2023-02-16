import styled from "styled-components";

export const BlogWorkContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  border: 1px solid red;
`;

export const BlogsContainer = styled.div`
  border: 1px solid red;
`;

export const WorkContainer = styled.div`
  border: 1px solid rgba(63, 63, 70, 0.4);
  border-radius: 10px;

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
      min-width: 410px;
      display: flex;
      align-items: center;
      justify-content: space-between;

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

          display: flex;
          align-items: center;

          color: #a1a1aa;
        }
      }
    }
  }
`;
