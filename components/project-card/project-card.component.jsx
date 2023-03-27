import Link from "next/link";
import { ProjectCardContainer } from "./project-card.styles";

export const ProjectCard = () => {
  return (
    <ProjectCardContainer>
      <img
        src="https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg"
        alt="icon"
      />
      <h3 className="project-name">Safient Protocol</h3>
      <p className="project-description">
        Creating technology to empower civilians to explore space on their own
        terms.
      </p>
      <div className="live-links">
        <Link href="#">
          <i class="fa-brands fa-github"></i>
        </Link>
        <Link href="#">
          <i class="fa-solid fa-link"></i>
        </Link>
      </div>
    </ProjectCardContainer>
  );
};
