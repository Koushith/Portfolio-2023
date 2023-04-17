import { Container } from "../../common/container.component";
import { ProjectCard } from "../../project-card/project-card.component";
import { ProjectSectionContainer } from "./projects.styles";

const projectData = [
  {
    icon: "",
    name: "Bike Rental System",
    description:
      "Implementation of a Bike Rental System using Node.js, Express, and MongoDB",
    gitHub: "https://github.com/Koushith/Bike-Rental-System",
    live: "https://github.com/Koushith/Bike-Rental-System",
  },
  {
    icon: "",
    name: "CrediTail",
    description:
      "Ivoice with Spit payment option built using React Native, Node/Express and MongoDB",
    gitHub: "https://github.com/Koushith/CrediTail",
    live: "https://github.com/Koushith/CrediTail",
  },
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
    gitHub: "https://github.com/Koushith/argent-x-extension",
    live: "https://devfolio.co/projects/safient-guardians-deed",
  },
  {
    icon: "",
    name: "Safient Protocol",
    description: "Manage your crypto secrets securely and conveniently.",
    gitHub: "https://github.com/safient/wallet",
    live: "https://dorahacks.io/buidl/2222",
  },

  {
    icon: "",
    name: "Portex",
    description: "Secure crypto portfolio management and exchange application.",
    gitHub: "https://github.com/koshikraj/portex",
    live: "https://devfolio.co/projects/portex-7c58",
  },
  {
    icon: "",
    name: "Sign Chain",
    description:
      "Digital signing platform for legal documents. Hello Sign alternative",
    gitHub: "https://github.com/signchain/core",
    live: "https://ethglobal.com/showcase/signchain-o181u",
  },
  {
    icon: "",
    name: "Ketch",
    description: "Fully functional Ecom store developed using MERN Stack.  ",
    gitHub: "https://github.com/Koushith/Ketch-Store",
    live: "https://ketch-store-nasq3epfb-koushith.vercel.app/",
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
