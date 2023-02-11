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
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */

        color: #e4e4e7;
      }
    }
  }
`;
