import { Paragraph } from "../../primitives/paragraph/paragraph.component";
import { Container } from "../container.component";
import { StyledFooter } from "./footer.styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container className="container">
        <nav>
          <ul>
            <li>About</li>
            <li>Articles</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Timeline</li>
          </ul>
        </nav>
        <p>Designed inspired by Tailwind Template</p>
      </Container>
    </StyledFooter>
  );
};
