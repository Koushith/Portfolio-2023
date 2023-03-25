import { Footer, Navbar } from "../components";
import { BlogWork, HeroSection } from "../components/sections";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { useState } from "react";

const Home = () => {
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
      <BlogWork />
    </>
  );
};

export default Home;
