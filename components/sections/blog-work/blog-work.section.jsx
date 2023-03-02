import Link from "next/link";
import { Container } from "../../common/container.component";
import {
  BlogCard,
  BlogsContainer,
  BlogWorkContainer,
  WorkContainer,
} from "./blog-work.styles";

export const BlogWork = () => {
  return (
    <Container>
      <section className="blog-work" style={{ marginTop: "14rem" }}>
        <h2 className="section-heading">Recent Posts</h2>
        <BlogWorkContainer>
          <BlogsContainer>
            <BlogCard className="blog-card">
              <p className="published-date">Jan 5, 2023</p>{" "}
              <h2 className="blog-title">
                Crafting a design system for a multiplanetary future
              </h2>
              <p className="blog-desc">
                Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system.
              </p>
              <Link href="#">Read article.......</Link>
            </BlogCard>
            <BlogCard className="blog-card">
              <p className="published-date">Jan 5, 2023</p>{" "}
              <h2 className="blog-title">
                Crafting a design system for a multiplanetary future
              </h2>
              <p className="blog-desc">
                Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system.
              </p>
              <Link href="#">Read article</Link>
            </BlogCard>
            <BlogCard className="blog-card">
              <p className="published-date">Jan 5, 2023</p>{" "}
              <h2 className="blog-title">
                Crafting a design system for a multiplanetary future
              </h2>
              <p className="blog-desc">
                Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system.
              </p>
              <Link href="#">Read article</Link>
            </BlogCard>
          </BlogsContainer>
          <WorkContainer>
            <div className="experience-container">
              <h2>Work</h2>

              <div className="company-container">
                <div className="company-info">
                  <img
                    src="https://d1jbmqjs327xbn.cloudfront.net/_pa/spaces-developer.pxand/nofolder-2021124/xyretail-logo.svg"
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
      </section>
    </Container>
  );
};
