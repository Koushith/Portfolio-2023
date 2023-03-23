import Link from "next/link";
import { Container } from "../../common/container.component";
import { BlogCard } from "./blog-card.component";
import {
  BlogsContainer,
  BlogWorkContainer,
  WorkContainer,
} from "./blog-work.styles";

const workHistory = [
  {
    companyName: "XY Retail",
    title: "Software Engineer",
    startYear: 2023,
    endYear: "Present",
    logo: "https://d1jbmqjs327xbn.cloudfront.net/_pa/spaces-developer.pxand/nofolder-2021124/xyretail-logo.svg",
  },
  {
    companyName: "Safient Protocol",
    title: "Product Engineer",
    startYear: 2020,
    endYear: 2023,
    logo: "https://pbs.twimg.com/profile_images/1631237979309219842/OmkE_l2H_400x400.png",
  },
  {
    companyName: "Infosys Limited",
    title: "Associate",
    startYear: 2019,
    endYear: 2020,
    logo: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
  },
];

export const BlogWork = () => {
  return (
    <Container>
      <section className="blog-work" style={{ marginTop: "14rem" }}>
        <h2 className="section-heading">Recent Posts</h2>
        <BlogWorkContainer>
          <BlogsContainer>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </BlogsContainer>
          <WorkContainer>
            <div className="experience-container">
              <h2>Work</h2>

              {workHistory.map((c, index) => (
                <div className="company-container" key={index}>
                  <div className="company-info">
                    <img src={c.logo} alt="logo" className="logo" />
                    <div>
                      <p className="company-name">{c.companyName}</p>
                      <span className="job-title">{c.title}</span>
                    </div>
                  </div>
                  <p className="year">
                    {c.startYear} - {c.endYear}
                  </p>
                </div>
              ))}
            </div>
          </WorkContainer>
        </BlogWorkContainer>
      </section>
    </Container>
  );
};
