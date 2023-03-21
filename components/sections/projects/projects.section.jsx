import { Container } from "../../common/container.component";
import { ProjectCard } from "../../project-card/project-card.component";
import { ProjectSectionContainer } from "./projects.styles";

export const ProjectsSection = () => {
  return (
    <Container>
      <ProjectSectionContainer>
        <div className="heading-container">
          <h2 className="primary-heading">
            Things I’ve made trying to put my dent in the universe.
          </h2>
          <p className="sub-heading">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>
        </div>

        <div className="projects-container">
          <ProjectCard />
          <ProjectCard /> <ProjectCard /> <ProjectCard /> <ProjectCard />{" "}
          <ProjectCard />
        </div>
      </ProjectSectionContainer>
    </Container>
  );
};
