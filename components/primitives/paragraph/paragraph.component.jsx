import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  /* or 200% */

  color: #a1a1aa;
`;

export const Paragraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};
