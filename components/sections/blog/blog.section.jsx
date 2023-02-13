import { Container } from "../../common/container.component";
import { BlogCard } from "./blog-card.component";
import { BlogSectionContainer } from "./blog.styles";

export const BlogSection = () => {
  return (
    <Container>
      <BlogSectionContainer>
        <h2 className="heading">
          Writing on software design, company building, and the aerospace
          industry.
        </h2>
        <p className="sub-heading">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>

        {/* tags a, search, filters goes here */}

        <div className="blog-list-container">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />

          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </BlogSectionContainer>
    </Container>
  );
};
