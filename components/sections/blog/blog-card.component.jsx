import { BlogCardContainer } from "./blog-card.styles";

export const BlogCard = () => {
  return (
    <BlogCardContainer className="blog-card">
      <p className="blog-published-date">Jan 5, 2023</p>
      <div className="blog-info">
        <h2 className="blog-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
          blanditiis.
        </h2>
        <p className="blog-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          quaerat facilis reprehenderit delectus est voluptatibus sint maiores
          corrupti numquam rem.
        </p>

        <a href="#" className="read-more">
          Read More
        </a>
      </div>
    </BlogCardContainer>
  );
};
