import { Container } from "../../common/container.component";
import {
  BlogsContainer,
  BlogWorkContainer,
  WorkContainer,
} from "./blog-work.styles";

export const BlogWork = () => {
  return (
    <Container>
      <h2>Recent Posts</h2>
      <BlogWorkContainer>
        <BlogsContainer>dd</BlogsContainer>
        <WorkContainer>
          <div className="experience-container">
            <h2>Work</h2>

            <div className="company-container">
              {/* icon &name */}
              {/* yeari */}
            </div>
          </div>
        </WorkContainer>
      </BlogWorkContainer>
    </Container>
  );
};
