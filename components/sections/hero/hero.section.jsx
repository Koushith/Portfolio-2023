import { Container } from "../../common/container.component";
import { Icon } from "../../primitives/icon/icon.component";
import { Paragraph } from "../../primitives/paragraph/paragraph.component";
import { HeroSectionContainer } from "./hero.styles";

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <Container>
        <div className="hero-content">
          <img
            src={
              "https://pbs.twimg.com/profile_images/1515621916551577601/yV-Trv9F_400x400.jpg"
            }
            alt="hero-image"
          />

          <h1 className="primary-heading hero-title">
            Software Engineer, Product Designer.
          </h1>
          <p className="description">
            I’m Koushith, a software Engineer and Product Designer based in
            Bangalore. I love designing and building for the web, you can read
            more about what I do and things I love over my website koushith.com.
          </p>

          <ul>
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
          </ul>
        </div>
      </Container>
    </HeroSectionContainer>
  );
};
