import Link from "next/link";
import { Paragraph } from "../../primitives/paragraph/paragraph.component";
import { Container } from "../container.component";
import { StyledFooter } from "./footer.styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container className="container">
        <nav>
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
              <Link href="timeline">Timeline</Link>
            </li>
          </ul>
        </nav>
        {/* <ul className="social-links">
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
          <li>
            <i className="fa-brands fa-youtube"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i className="fa-brands fa-dribbble"></i>
          </li>
        </ul> */}
        <p>
          &copy; {`${new Date().getFullYear().toString()}`} - Built with NextJS
          and VanillaCSS.
        </p>
      </Container>
    </StyledFooter>
  );
};
