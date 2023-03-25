import Link from "next/link";
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

  .logo {
    color: #e4e4e7;
    font-size: 1.4rem;
    font-weight: 700;
    transition: all 0.3s;
    &:hover {
      color: #2dd4bf;
      cursor: pointer;
    }
  }

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
`;

export const NavBar = () => {
  return (
    <Container>
      <NavbarContainer>
        {/* <img src="logo.svg" alt="logo" className="logo" height={17} /> */}
        <h2 className="logo">&#123; K &#125;</h2>

        <ul>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="projects">Projects</Link>
          </li>
          <li>
            <Link href="blog">Articles</Link>
          </li>
          <li>
            <Link href="resume">Resume</Link>
          </li>
          <li>
            <Link href="timeline">Timeline</Link>
          </li>
        </ul>
      </NavbarContainer>
    </Container>
  );
};
