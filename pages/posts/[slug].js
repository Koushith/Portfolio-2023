import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "../../components";

export const ArticleContainer = styled.article`
  /* Body Styles */
  .content {
    max-width: 800px;
    margin: 0 auto;
  }

  /* Header Styles */
  margin-top: 20rem;
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
  h6 {
    margin: 20px 0;
    font-weight: bold;
  }

  p,
  ul,
  ol,
  pre {
    margin: 10px 0;
    font-size: 14px;
    color: red;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  code {
    background-color: #f8f9fa;
    border: 1px solid #ccc;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 14px;
  }

  blockquote {
    border-left: 4px solid #ccc;
    margin: 10px 0;
    padding: 10px;
    font-style: italic;
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

const CONTENT_API_KEY = "4a73d91788e9613b62a8310488";
async function getPost(slug) {
  const res = await fetch(
    `https://koushith.digitalpress.blog/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,feature_image,published_at,reading_time`
  ).then((res) => res.json());

  console.log(res, "res");
  const posts = res.posts;

  return posts[0];
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  console.log("POSTTTT", post);
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
        <h1>{post.title}</h1>
        {/* 
        <MetaInfo>
          <p className="">{new Date(post.published_at).toDateString()}</p> |
          <p>{post.reading_time}min read</p>
        </MetaInfo> */}

        <div className="hero-image">
          <img src={post.feature_image} className="feature-image" />
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
