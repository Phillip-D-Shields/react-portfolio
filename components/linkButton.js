import React from 'react'
import styled from 'styled-components'

const StyledLinkBtn = styled.a`
    
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin: .5rem 0;
    border-radius: 0.25rem;
    border: .05rem solid #404040;
    background: #D9CCCC;
    color: #404040;
    transition: all 0.5s ease;

    &:hover {
        background: #404040;
        color: #D9CCCC;
    }
  
`;

export const LinkButton = ({url, text}) => 
    <StyledLinkBtn href={url} >{text}</StyledLinkBtn>

