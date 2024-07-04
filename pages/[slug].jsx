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

/* Reset default browser styles */
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  color: #333;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  margin-top: 1.5em;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.2em;
}

/* Paragraphs */
p {
  margin: 1em 0;
}

/* Links */
a {
  color: #007bff; /* Bootstrap default link color */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Images */
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1em 0;
}

/* Code blocks */
pre {
  background-color: #f8f9fa; /* Bootstrap code block background color */
  padding: 10px;
  overflow-x: auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 1em 0;
  white-space: pre-wrap;
}

code {
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
}

/* Blockquotes */
blockquote {
  margin: 1em 0;
  padding: 0 15px;
  color: #666;
  border-left: 4px solid #ccc;
}

/* Lists */
ul, ol {
  margin: 1em 0;
  padding-left: 20px;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
}

th, td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

/* Responsive layout adjustments */
@media only screen and (max-width: 600px) {
  body {
    padding: 10px;
  }
  h1 {
    font-size: 1.8em;
  }
  h2 {
    font-size: 1.4em;
  }
  h3 {
    font-size: 1.1em;
  }
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
