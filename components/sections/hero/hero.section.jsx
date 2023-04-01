import Link from "next/link";
import { socialLinks } from "../../../utils/social-links";
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
            Hello, I am Koushith👋 A Software Engineer and Product Designer
            based in Bangalore, with a passion for creating exceptional digital
            experiences. I specialize in building cutting-edge web applications
            that blend stunning visuals with seamless functionality.
          </p>

          <ul>
            {socialLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.link} target={"_blank"}>
                  {" "}
                  <i className={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </HeroSectionContainer>
  );
};
