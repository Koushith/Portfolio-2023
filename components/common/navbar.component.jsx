// import Link from "next/link";
// import styled from "styled-components";
// import { Container } from "./container.component";
import "react-spring-bottom-sheet/dist/style.css";
import Link from "next/link";
import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import styled from "styled-components";
import { MobileMenu } from "./mobile-menu.component";
import { useRouter } from "next/router";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  margin-left: 2rem;
  margin-right: 2rem;

  nav {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    border-bottom: 1px solid rgba(63, 63, 70, 0.4);
    backdrop-filter: blur(5px);
    max-width: 1200px;

    .logo {
      transition: all 0.3s;
      &:hover {
        color: #2dd4bf;
        cursor: pointer;
      }
    }
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
        transition: all 0.3s;
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
        i {
          font-size: 16px;
          display: block;
        }
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
        i {
          font-size: 16px;
          display: block;
        }
      }
    }
  }
`;

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useRouter();

  return (
    <NavbarContainer>
      <nav>
        <h2 className="logo" onClick={() => navigate.push("/")}>
          &#123; K &#125;
        </h2>
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
            {open ? (
              <i
                class="fa-sharp fa-solid fa-xmark"
                onClick={() => setOpen(true)}
              ></i>
            ) : (
              <i className="fa-solid fa-bars" onClick={() => setOpen(true)}></i>
            )}
            <MobileMenu open={open} setOpen={setOpen} />
          </div>
        </ul>
      </nav>
    </NavbarContainer>
  );
};
