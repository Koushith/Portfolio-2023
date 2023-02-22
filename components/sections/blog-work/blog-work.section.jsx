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
        <BlogsContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          aliquam assumenda porro error architecto fugit sapiente neque?
          Possimus, inventore rem.
        </BlogsContainer>
        <WorkContainer>
          <div className="experience-container">
            <h2>Work</h2>

            <div className="company-container">
              <div className="company-info">
                <img
                  src="https://pbs.twimg.com/profile_images/1515621916551577601/yV-Trv9F_400x400.jpg"
                  alt="logo"
                  className="logo"
                />
                <div>
                  <p className="company-name">Safient Protocol</p>
                  <span className="job-title">Frontend Engineer</span>
                </div>
              </div>
              <p className="year">2019 - Present</p>
            </div>

            <div className="company-container">
              <div className="company-info">
                <img
                  src="https://pbs.twimg.com/profile_images/1515621916551577601/yV-Trv9F_400x400.jpg"
                  alt="logo"
                  className="logo"
                />
                <div>
                  <p className="company-name">Safient Protocol</p>
                  <span className="job-title">Frontend Engineer</span>
                </div>
              </div>
              <p className="year">2019 - Present</p>
            </div>

            <div className="company-container">
              <div className="company-info">
                <img
                  src="https://pbs.twimg.com/profile_images/1515621916551577601/yV-Trv9F_400x400.jpg"
                  alt="logo"
                  className="logo"
                />
                <div>
                  <p className="company-name">Safient Protocol</p>
                  <span className="job-title">Frontend Engineer</span>
                </div>
              </div>
              <p className="year">2019 - Present</p>
            </div>

            <div className="company-container">
              <div className="company-info">
                <img
                  src="https://pbs.twimg.com/profile_images/1515621916551577601/yV-Trv9F_400x400.jpg"
                  alt="logo"
                  className="logo"
                />
                <div>
                  <p className="company-name">Safient Protocol</p>
                  <span className="job-title">Frontend Engineer</span>
                </div>
              </div>
              <p className="year">2019 - Present</p>
            </div>
          </div>
        </WorkContainer>
      </BlogWorkContainer>
    </Container>
  );
};
