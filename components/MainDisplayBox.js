import styled from "styled-components";

const DisplayBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 4rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: ${(props) => props.theme.color};
  text-align: right;

  h1 {
    width: 100%;
    font-size: 5rem;
    margin: 2rem 0;
    padding: 0.5rem;
    background: ${(props) => props.theme.headerBg};
    color: ${(props) => props.theme.headerFg};
    letter-spacing: 0.15rem;
    border-radius: 0.05rem;
    text-transform: uppercase;
  }
`;

export default function MainDisplayBox(props) {
  return (
    <DisplayBox>
      <h1>{props.headerText}</h1>
      {props.children}
    </DisplayBox>
  );
}
