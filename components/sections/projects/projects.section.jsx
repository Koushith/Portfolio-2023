import { Container } from "../../common/container.component";
import { ProjectCard } from "../../project-card/project-card.component";
import { ProjectSectionContainer } from "./projects.styles";

const projectData = [
  {
    icon: "",
    name: "Ben Wallet",
    description:
      "Event-based conditional wallet account recovery. Built on ETHIndia2022 Hackathon  ",
    gitHub: "https://github.com/Koushith/ben-wallet-extension",
    live: "https://devfolio.co/projects/ben-wallet-cf3a",
  },
  {
    icon: "",
    name: "Safient Guardians",
    description:
      "Recovery option on Argent-x wallet extension. built on Starknet Hackathon",
    gitHub: "https://github.com/Koushith/ben-wallet-extension",
    live: "https://devfolio.co/projects/ben-wallet-cf3a",
  },
  {
    icon: "",
    name: "Safient Protocol",
    description: "Manage your crypto secrets securely and conveniently.",
    gitHub: "https://github.com/Koushith/ben-wallet-extension",
    live: "https://devfolio.co/projects/ben-wallet-cf3a",
  },

  {
    icon: "",
    name: "Portex",
    description: "Secure crypto portfolio management and exchange application.",
    gitHub: "https://github.com/Koushith/ben-wallet-extension",
    live: "https://devfolio.co/projects/ben-wallet-cf3a",
  },
  {
    icon: "",
    name: "Sign Chain",
    description:
      "Digital signing platform for legal documents. Hello Sign alternative",
    gitHub: "https://github.com/Koushith/ben-wallet-extension",
    live: "https://devfolio.co/projects/ben-wallet-cf3a",
  },
  {
    icon: "",
    name: "Ketch",
    description: "Fully functional Ecom store developed using MERN Stack.  ",
    gitHub: "https://github.com/Koushith/ben-wallet-extension",
    live: "https://devfolio.co/projects/ben-wallet-cf3a",
  },
];

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
          {projectData.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </ProjectSectionContainer>
    </Container>
  );
};
