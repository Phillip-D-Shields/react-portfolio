import styled from 'styled-components'

const StyledLinkBtn = styled.a`
display: block;
text-decoration: underline;
    cursor: pointer;
    font-size: 1.5rem;
    padding: .75rem;
    margin: .75rem 0;
    color: ${(props) => props.theme.buttonFg};
    transition: all 0.5s ease;

    &:hover {
        color: ${(props) => props.theme.buttonBg};
    }
  
`;

export default function LinkButton (props) { 
    return <StyledLinkBtn href={props.url} >{props.text}</StyledLinkBtn>
}
