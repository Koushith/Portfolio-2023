import Link from "next/link";
import styled from "styled-components";

export const BlogCardContainer = styled.article`
  transition: all 0.3s;
  padding: 3.2rem 4rem 3.2rem 2.6rem;
  border-radius: 8px;
  /* min-width: 580px; */

  cursor: pointer;
  .published-date {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    /* identical to box height, or 200% */
    border-left: 2px solid #a1a1aa;
    color: #a1a1aa;
    padding-left: 1rem;
  }

  .blog-title {
    margin: 1.2rem 0 0.8rem 0;
  }

  .blog-desc {
  }
  &:hover {
    background-color: #252428;
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const BlogCard = ({ post }) => {
  return (
    <BlogCardContainer className="blog-card">
      <p className="published-date">
        {" "}
        {new Date(post.published_at).toDateString().toUpperCase()}
      </p>{" "}
      <h2 className="blog-title sm-paragraph-bold">{post.title}</h2>
      <p className="blog-desc paragraph">{post.custom_excerpt}</p>
      <Link href={`/${post.slug}`} className="link">
        Read article.
      </Link>
    </BlogCardContainer>
  );
};
