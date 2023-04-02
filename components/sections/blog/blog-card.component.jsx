import Link from "next/link";
import { BlogCardContainer } from "./blog-card.styles";

export const BlogCard = ({ title, summary, published_at, slug }) => {
  return (
    <BlogCardContainer className="blog-card" key={slug}>
      <p className="blog-published-date paragraph">
        {new Date(published_at).toDateString().toUpperCase()}
      </p>
      <div className="blog-info">
        <h2 className="sm-paragraph-bold ">{title}</h2>
        <p className="blog-desc paragraph">{summary}</p>

        <Link href={`/${slug}`} className="link">
          Read More
        </Link>
      </div>
    </BlogCardContainer>
  );
};
