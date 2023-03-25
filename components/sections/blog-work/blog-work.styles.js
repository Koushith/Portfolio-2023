import styled from "styled-components";

export const BlogWorkContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
  /* border: 1px solid red; */
  margin-top: 1.2rem;

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    flex-direction: column;
  }
`;

export const BlogsContainer = styled.div`
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 4rem 0;
  }
  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    /* background-color: green; */
  }
`;

export const WorkContainer = styled.div`
  border: 1px solid rgba(63, 63, 70, 0.4);
  border-radius: 10px;
  min-width: 41rem;
  background-color: red;

  padding: 30px;
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
    background-color: green;
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
          margin-top: -0.5rem;
          display: flex;
          align-items: center;

          color: #a1a1aa;
        }
      }
    }
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    width: 100%;
    border: 1px solid red;
    padding: 0 2rem 0 2rem;
  }

  /* mobile */

  @media (max-width: 34em) {
    width: 100%;
    padding: 0 2rem 0 2rem;
  }
`;
