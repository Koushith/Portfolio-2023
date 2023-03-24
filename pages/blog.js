import { BlogSection } from "../components";
import { usePost } from "../context/post.context";

// const CONTENT_API_KEY = "4a73d91788e9613b62a8310488";

// async function getPosts() {
//   // "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"

//   const res = await fetch(
//     `https://koushith.digitalpress.blog/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,published_at`
//   ).then((res) => res.json());

//   const posts = res.posts;

//   return posts;
// }

// const getStaticProps = async () => {
//   const posts = await getPosts();
//   return {
//     props: { posts },
//     revalidate: 10,
//   };
// };

// const Blog = (props) => {
//   console.log("PROPS", props);
//   const { posts } = props;
//   console.log("PROPS", posts);
//   return <BlogSection props={posts} />;
// };

// export default Blog;

const CONTENT_API_KEY = "4a73d91788e9613b62a8310488";

async function getPosts() {
  // "https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062"

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

// eslint-disable-next-line react/function-component-definition
export default function Blog(props) {
  const { posts } = props;
  const { setPosts } = usePost();
  if (posts) {
    console.log("inside if blocck");
    setPosts(posts);
  }

  return <BlogSection posts={posts} />;
}
