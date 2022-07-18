import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  bottom: 12px;
  left: 12px;
`;

const UlContainer = styled.ul`
  position: relative;
  transform: skewY(-15deg);
`;

const StyledLi = styled.li`
  position: relative;
  list-style: none;
  width: 125px;
  background:#049DD9;
  padding: 15px;
  transition: 0.5s;
  color: #D9CCCC;
  display: flex;

  &:hover {
    background: #F23005;
    transform: translateX(30px);
    color:#404040;

    &:before {
      background: #B32404;
    }
    &:after {
      background: #731702;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background:  #036F99;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
  }

  &:after {
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #024059;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }

  Link {
    text-transform: uppercase;
    display: block;
    letter-spacing: 0.05rem;
    transition: 0.25s;
  }
  a {
    width: 100%;
    height: 100%;
  }
`;

export default function LargeNavbar() {
  return (
    <NavContainer>
      
      <UlContainer>
        
        <StyledLi style={{ zIndex: 4 }}>
          <Link href="/">
            kia ora
          </Link>{" "}
        </StyledLi>

        <StyledLi style={{ zIndex: 3 }}>
          <Link href="/past">
            past
            experience
          </Link>{" "}
        </StyledLi>

        <StyledLi style={{ zIndex: 2 }}>
          <Link href="/code">
            code
          </Link>{" "}
        </StyledLi>
        
        <StyledLi style={{ zIndex: 1 }}>
          <Link href="/live">
            live examples
          </Link>{" "}
        </StyledLi>

        <StyledLi style={{ zIndex: 0 }}>
          <Link href="/about">
            about me
          </Link>{" "}
        </StyledLi>
      
      </UlContainer>
    
    </NavContainer>
  );
}
