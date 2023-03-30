import Link from "next/link";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import styled from "styled-components";

export const MobileNavStyles = styled.div`
  .menu-list {
    padding: 2rem;

    .menu-item {
      i,
      a {
        font-size: 14px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2rem;
        color: #fff;
      }
      a {
        margin-left: 1rem;
      }
    }
  }
`;

export const MobileMenu = ({ open, setOpen }) => {
  return (
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
        <div>
          <h2>Menu</h2>
        </div>
      }
      // footer={
      //   <button onClick={() => setOpen(false)} className="w-full">
      //     Done
      //   </button>
      // }
    >
      <MobileNavStyles>
        <div className="menu-list">
          <div className="menu-item">
            <i className="fa-brands fa-github"></i>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </div>

          <div className="menu-item">
            <i className="fa-brands fa-github"></i>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </div>

          <div className="menu-item">
            <i className="fa-brands fa-github"></i>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </div>

          <div className="menu-item">
            <i className="fa-brands fa-github"></i>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </div>
        </div>
      </MobileNavStyles>
    </BottomSheet>
  );
};
