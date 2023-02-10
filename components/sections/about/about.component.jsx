import { Container } from "../../common/container.component";
import { AboutContainer } from "./about.styles";

export const AboutSection = () => {
  return (
    <Container>
      <AboutContainer className="about-container">
        <div className="about">
          <h2 className="about-heading">
            I’m Spencer Sharp. I live in New York City, where I design the
            future.
          </h2>

          <p className="about-paragraph">
            I’ve loved making things for as long as I can remember, and wrote my
            first program when I was 6 years old, just two weeks after my mom
            brought home the brand new Macintosh LC 550 that I taught myself to
            type on.
          </p>

          <p className="about-paragraph">
            The only thing I loved more than computers as a kid was space. When
            I was 8, I climbed the 40-foot oak tree at the back of our yard
            while wearing my older sister’s motorcycle helmet, counted down from
            three, and jumped — hoping the tree was tall enough that with just a
            bit of momentum I’d be able to get to orbit.
          </p>
          <p className="about-paragraph">
            I spent the next few summers indoors working on a rocket design,
            while I recovered from the multiple surgeries it took to fix my
            badly broken legs. It took nine iterations, but when I was 15 I sent
            my dad’s Blackberry into orbit and was able to transmit a photo back
            down to our family computer from space.
          </p>

          <p className="about-paragraph">
            Today, I’m the founder of Planetaria, where we’re working on
            civilian space suits and manned shuttle kits you can assemble at
            home so that the next generation of kids really can make it to orbit
            — from the comfort of their own backyards
          </p>
        </div>

        <div className="links">
          <img src="" alt="" />

          <ul>
            <li>
              <span>Follow on Twitter</span>
            </li>

            <li>
              <span>Follow on Twitter</span>
            </li>

            <li>
              <span>Follow on Twitter</span>
            </li>

            <li>
              <span>Follow on Twitter</span>
            </li>
          </ul>
        </div>
      </AboutContainer>
    </Container>
  );
};
