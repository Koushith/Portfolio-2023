import { Container } from "../../common/container.component";
import { Icon } from "../../primitives/icon/icon.component";
import { AboutContainer } from "./about.styles";

export const AboutSection = () => {
  return (
    <AboutContainer>
      <div className="about">
        {/* pretty ugly way- fix this later while refactoring */}
        <div className="about-image-desktop">
          <img src="koushith.jpg" alt="logo" />
        </div>

        <h2 className="primary-heading">
          Hey, I'm Koushith, and I'm a software engineer from Bangalore, India.
        </h2>

        <p className="about-paragraph paragraph">
          If you're wondering what I do, I basically build and design things
          that people use on their computers. And no, I'm not a wizard, although
          I do occasionally wear a wizard hat for inspiration.
        </p>

        <p className="about-paragraph paragraph">
          I've worked on creating Web apps, Moble application, and user
          experiences, which basically means I've spent countless hours staring
          at lines of code until they made sense. But hey, that's what makes me
          happy! When I'm not coding, you can find me trying to convince my cat
          to sit in my lap.
        </p>

        <h2 className="sm-paragraph-bold">
          My life principles are pretty simple:
        </h2>

        <ol>
          <li> don't give up</li>
          <li> work hard (but also take breaks to pet cats). </li>
        </ol>

        <p className="about-paragraph paragraph">
          I was born and raised in a small village in Kodagu, also known as the
          Scotland of India, and I didn't know anything about computers until a
          few years ago. But I'm proud to say that I've taught myself everything
          I know about software engineering, and I'm constantly learning more.
          Just don't ask me to explain the difference between Java and
          JavaScript. It's a sore subject."
        </p>
      </div>

      <div className="links">
        <img src="koushith.jpg" alt="logo" />

        <ul>
          <li>
            <i className="fa-brands fa-twitter"></i>
            <span>Follow on Twitter</span>
          </li>

          <li>
            <i className="fa-brands fa-github"></i>
            <span>Follow on GirHub</span>
          </li>

          <li>
            <i className="fa-brands fa-linkedin"></i>
            <span>Follow on LinkedIn</span>
          </li>

          <li>
            <i className="fa-brands fa-dribbble"></i>
            <span>Follow on Dribbble</span>
          </li>
        </ul>

        <div className="email-container">
          <li>
            <i className="fa-solid fa-envelope"></i>
            <span>koushith97@gmail.com</span>
          </li>
        </div>
      </div>
    </AboutContainer>
  );
};
