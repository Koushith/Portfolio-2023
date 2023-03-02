import styled from "styled-components";
import { Container } from "./container.component";

export const NavbarContainer = styled.nav`
  height: 80px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(63, 63, 70, 0.4);
  backdrop-filter: blur(5px);
  padding: 0 0rem 0 2rem;
  ul {
    list-style: none;
    display: flex;
    gap: 2.4rem;
    li {
      a {
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 500;
        color: #e4e4e7;
        &:hover {
          color: #2dd4bf;
          cursor: pointer;
        }
      }
    }
  }
`;

export const NavBar = () => {
  return (
    <Container>
      <NavbarContainer>
        <img src="" alt="logo" className="logo" />

        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Timeline</a>
          </li>
        </ul>
      </NavbarContainer>
    </Container>
  );
};
