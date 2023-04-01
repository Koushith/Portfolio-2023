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
      {/* <button onClick={() => setOpen(true)}>Open</button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        defaultSnap={({ snapPoints, lastSnap }) =>
          lastSnap ?? Math.min(...snapPoints)
        }
        snapPoints={({ maxHeight }) => [
          maxHeight - maxHeight / 5,
          maxHeight * 0.6,
        ]}
        header={
          <div style={{ display: "flex" }}>
            <h1>kjgdfkgjdfg</h1>
            <h1>kjgdfkgjdfg</h1>
            <h1>kjgdfkgjdfg</h1>
            <h1>kjgdfkgjdfg</h1>
            <h1>kjgdfkgjdfg</h1>
            <h1>kjgdfkgjdfg</h1>
          </div>
        }
        footer={
          <button onClick={() => setOpen(false)} className="w-full">
            Done
          </button>
        }
      >
        <p>lorem20dsfsdlfmkdsfksdjfdskj</p>
      </BottomSheet> */}
      <HeroSection />
      <BlogWork posts={posts} />
    </>
  );
};

export default Home;
