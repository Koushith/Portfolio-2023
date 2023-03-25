// eslint-disable-next-line jsx-a11y/anchor-is-valid
import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px solid rgba(63, 63, 70, 0.4);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 28px;
    }
  }

  nav {
    margin: 3rem 0 3rem 0;
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      gap: 3.6rem;

      li {
        a {
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: 500;
          color: #e4e4e7;
          transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter, -webkit-backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 0.15s;
          &:hover {
            color: #2dd4bf;
            cursor: pointer;
          }
        }
      }
    }
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    .container {
      flex-direction: column;
      padding: 0 2rem 0 2rem;

      nav {
        margin-top: 4rem;
      }
      p {
        margin-top: -1rem;
        margin-bottom: 2rem;
      }
    }
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    margin-top: 4rem;

    .container {
      overflow: hidden;

      nav {
      }

      p {
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 4rem;
      }
    }
  }
`;
