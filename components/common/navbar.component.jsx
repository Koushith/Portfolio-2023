// import Link from "next/link";
// import styled from "styled-components";
// import { Container } from "./container.component";
import "react-spring-bottom-sheet/dist/style.css";
import Link from "next/link";
import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import styled from "styled-components";
import { MobileMenu } from "./mobile-menu.component";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  margin-left: 2rem;
  margin-right: 2rem;

  nav {
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    border-bottom: 1px solid rgba(63, 63, 70, 0.4);
    backdrop-filter: blur(5px);
    max-width: 1200px;
  }
  .nav-list {
    list-style: none;
    display: flex;
    gap: 2.4rem;

    .mobile-menu {
      display: none;
    }

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

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    .nav-list {
      .mobile-menu {
        display: block;
      }
      li {
        display: none;
      }
    }
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    /* background-color: green; */

    .nav-list {
      .mobile-menu {
        display: block;
      }
    }
  }
`;

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavbarContainer>
      <nav>
        <h2 className="logo">&#123; K &#125;</h2>
        <ul className="nav-list">
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
          <div className="mobile-menu">
            <i className="fa-duotone fa-bars" onClick={() => setOpen(true)}></i>

            <MobileMenu open={open} setOpen={setOpen} />
          </div>
        </ul>
      </nav>
    </NavbarContainer>
  );
};
