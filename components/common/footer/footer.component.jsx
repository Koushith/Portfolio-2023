import { Paragraph } from "../../primitives/paragraph/paragraph.component";
import { Container } from "../container.component";
import { StyledFooter } from "./footer.styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container className="test">
        <div className="test">
          <nav>
            <ul>
              <li>About</li>
              <li>Articles</li>
              <li>Projects</li>
              <li>Resume</li>
              <li>Timeline</li>
            </ul>
          </nav>
          <Paragraph>Designed inspired by Tailwind Template</Paragraph>
        </div>
      </Container>
    </StyledFooter>
  );
};
