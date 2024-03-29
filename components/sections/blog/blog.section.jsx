import { Container } from "../../common/container.component";
import { BlogCard } from "./blog-card.component";
import { BlogSectionContainer } from "./blog.styles";

export const BlogSection = ({ posts }) => {
  return (
    <Container>
      <BlogSectionContainer>
        <h2 className="primary-heading">
          Writing on software engineering, UI design, and about life
          experiences.
        </h2>
        <p className="sub-heading">
          All of my long-form thoughts on programming, product design, and more,
          collected in chronological order.
        </p>

        {/* tags a, search, filters goes here */}

        <div className="blog-list-container">
          {posts.map((post) => (
            <BlogCard
              title={post.title}
              summary={post.custom_excerpt}
              slug={post.slug}
              key={post.slug}
              published_at={post.published_at}
            />
          ))}
        </div>
      </BlogSectionContainer>
    </Container>
  );
};
