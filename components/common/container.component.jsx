import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};
