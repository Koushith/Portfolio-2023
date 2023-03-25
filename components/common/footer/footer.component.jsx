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
              <Link href="resume">Resume</Link>
            </li>
            <li>
              <Link href="timeline">Timeline</Link>
            </li>
          </ul>
        </nav>
        <p>Designed inspired by Tailwind Template</p>
      </Container>
    </StyledFooter>
  );
};
