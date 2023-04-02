import { Footer, Navbar } from "../components";
import { BlogWork, HeroSection } from "../components/sections";
import { BottomSheet } from "react-spring-bottom-sheet";

import { useState } from "react";

const CONTENT_API_KEY = "4a73d91788e9613b62a8310488";

async function getPosts() {
  const res = await fetch(
    `https://koushith.digitalpress.blog/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,published_at`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 10,
  };
};

const Home = (props) => {
  const { posts } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeroSection />
      <BlogWork posts={posts} />
    </>
  );
};

export default Home;
