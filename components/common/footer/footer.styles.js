import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
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
