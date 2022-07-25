import styled from 'styled-components'

const StyledLinkBtn = styled.a`
width: 50%;
display: block;
    cursor: pointer;
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem 2rem;
    margin: .5rem auto;
    border-radius: 0.25rem;
    border: 2px solid ${(props) => props.theme.buttonFg};
    background: ${(props) => props.theme.buttonBg};
    color: ${(props) => props.theme.buttonFg};
    transition: all 0.5s ease;

    &:hover {
        background: ${(props) => props.theme.buttonFg};
        color: ${(props) => props.theme.buttonBg};
    }
  
`;

export default function LinkButton (props) { 
    return <StyledLinkBtn href={props.url} >{props.text}</StyledLinkBtn>
}
