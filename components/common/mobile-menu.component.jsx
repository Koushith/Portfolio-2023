import Link from "next/link";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import styled from "styled-components";

export const MobileNavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  gap: 3rem;
  .menu-item {
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    border-radius: 4px;

    i {
      display: block;
    }
    a {
      display: block;
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
        <div className="menu-item">
          <i class="fa-solid fa-link"></i>
          <Link href="#" className="link">
            About
          </Link>
        </div>

        <div className="menu-item">
          <i class="fa-solid fa-link"></i>
          <Link href="#" className="link">
            About
          </Link>
        </div>

        <div className="menu-item">
          <i class="fa-solid fa-link"></i>
          <Link href="#" className="link">
            About
          </Link>
        </div>

        <div className="menu-item">
          <i class="fa-solid fa-link"></i>
          <Link href="#" className="link">
            About
          </Link>
        </div>
      </MobileNavStyles>
    </BottomSheet>
  );
};
