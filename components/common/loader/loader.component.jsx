import styled from "styled-components";

export const LoaderWrapper = styled.div`
  .wrapper {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }

  /*code for custom loading icon*/

  .loader {
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #505050;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="wrapper">
        <div className="loader"></div>
      </div>
    </LoaderWrapper>
  );
};
