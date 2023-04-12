import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "../components";

export const ArticleContainer = styled.article`
  margin-bottom: 6rem;
  margin-top: 4rem;

  .content {
    max-width: 800px;
    margin: 40px auto 0 auto;
    padding: 0 2rem;
  }

  .hero-image {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    /* img {
      width: 100%;
    } */
  }

  .meta-info {
    .post-title {
      font-size: 2.4rem;
      font-weight: 600;
      text-align: center;
      padding: 0 2rem 0 2rem;
    }

    .author-details {
      display: flex;
      gap: 2rem;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;

      .published-date {
        margin-top: 0.8rem;
      }
    }
  }

  /* Header Styles */

  header {
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    padding: 10px 20px;
  }

  header h1 {
    margin: 0;
    font-size: 36px;
    font-weight: bold;
  }

  header p {
    margin: 0;
    font-size: 18px;
  }

  /* Main Content Styles */

  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    margin: 30px 0 10px 0;
    font-weight: 500;
    color: #fff;
    font-size: 16px;
  }

  h3 {
    line-height: 26px;
  }

  p,
  ul,
  ol,
  pre {
    font-size: 14px;
    line-height: 28px;
    margin: 22px 0 20px 0;
    color: #a1a1aa;
  }

  li {
    /* margin: 15px 0 15px 15px; */
    margin-left: 18px;
    margin-bottom: 8px;
    font-size: 14px;
  }

  a {
    color: #2dd4bf;
    font-weight: 500;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    height: auto;
    aspect-ratio: auto;
  }

  pre {
    background-color: #211f23;
    padding: 2rem;
    border-radius: 4px;
  }
  code {
    /* padding: 0.2em 0.4em; */
    border-radius: 0.25em;
    /* border: 1px solid #ccc; */
    width: 100%;
  }

  blockquote {
    border-left: 4px solid #ccc;
    font-weight: 500;
    font-style: italic;
    border-left-width: 0.25rem;
    border-left-color: #e5e7eb;
    font-size: 14px;
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    padding: 20px;
    border-radius: 4px;
    background-color: #252428;
  }

  table {
    border-collapse: collapse;
    margin: 10px 0;
    width: 100%;
  }

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f8f9fa;
    font-weight: bold;
  }

  hr {
    border: 0;
    border-top: 1px solid #ccc;
    margin: 20px 0;
  }
`;

// todo- move this to env

const CONTENT_API_KEY = "4a73d91788e9613b62a8310488";

async function getPost(slug) {
  const res = await fetch(
    `https://koushith.digitalpress.blog/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,feature_image,published_at,reading_time`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);

  return {
    props: { post },
    revalidate: 10,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Post = (props) => {
  const { post } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <ArticleContainer>
        <div className="meta-info">
          <h1 className="post-title">{post.title}</h1>
          <div className="author-details">
            <p className="published-date">
              {new Date(post.published_at).toDateString()}
            </p>
            <p className="published-date">{post.reading_time}min read</p>
          </div>
          <div className="hero-image">
            <img src={post.feature_image} className="feature-image" />
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="content"
        ></div>
      </ArticleContainer>
    </Container>
  );
};

export default Post;
