import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggler(props) {
  const ThemeButton = styled.div`
    cursor: pointer;
    padding: 1rem;
    font-size: 1.5rem;
    position: fixed;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.themeTogglerBg};
    color: ${(props) => props.theme.themeTogglerFg};
    opacity: 60%;
    transition: all 0.25s ease-in-out;

    &:hover {
      transform: scale(1.1);
      opacity: 90%;
      background: ${(props) => props.theme.themeTogglerBgHover};
      color: ${(props) => props.theme.themeTogglerFgHover};
    }
  `;

  return (
    <ThemeButton onClick={props.themeToggler}>
      <FontAwesomeIcon icon={faCircleHalfStroke} />
    </ThemeButton>
  );
}
