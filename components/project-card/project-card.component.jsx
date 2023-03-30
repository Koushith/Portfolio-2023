import Link from "next/link";
import { ProjectCardContainer } from "./project-card.styles";

//todo - add link and display based on props

export const ProjectCard = ({ project }) => {
  return (
    <ProjectCardContainer>
      <img
        src="https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg"
        alt="icon"
      />
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="live-links">
        <Link href={project.gitHub} target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link href={project.live} target="_blank">
          <i className="fa-solid fa-link"></i>
        </Link>
      </div>
    </ProjectCardContainer>
  );
};
