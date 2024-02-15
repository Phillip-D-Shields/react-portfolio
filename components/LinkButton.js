import styled from "styled-components";

const StyledLinkBtn = styled.a`
  display: block;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.75rem;
  margin: 0.75rem 0;
  color: ${(props) => props.theme.textLink};
  transition: all 0.5s ease;

  &:hover {
    color: ${(props) => props.theme.textLinkHover};
  }
`;

export default function LinkButton(props) {
  return (
    <StyledLinkBtn href={props.url} target="_blank" rel="noreferrer">
      {props.text}
    </StyledLinkBtn>
  );
}
