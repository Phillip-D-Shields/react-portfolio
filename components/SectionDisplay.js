import styled from "styled-components";

const StyledSection = styled.div`
  width: 70%;

  h3 {
    width: 75%;
    font-size: 3rem;
    margin: 1.5rem 0 1rem auto;
    padding: 0.5rem;
    background: ${(props) => props.theme.sectionTitleBg};
    color: ${(props) => props.theme.sectionTitleFg};
    letter-spacing: 0.05rem;
    border-radius: 0.05rem;
  }

  p {
    text-indent: 0.75rem;
    font-size: 1.25rem;
    width: 100%;
    padding: 0 1.75rem;
    text-align: left;
    margin: 2rem 0;
  }

  .text-link {
    text-decoration: underline;
    color: ${(props) => props.theme.textLink};
  }

  .text-link:hover {
    color: ${(props) => props.theme.textLinkHover};
  }
`;

export default function SectionDisplay(props) {
  return (
    <StyledSection>
      <h3>{props.title}</h3>
      {props.children}
    </StyledSection>
  );
}
