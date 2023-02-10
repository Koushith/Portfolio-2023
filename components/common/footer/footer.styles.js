// eslint-disable-next-line jsx-a11y/anchor-is-valid
import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px solid rgba(63, 63, 70, 0.4);

  .test {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  nav {
    margin-top: 3rem;
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
