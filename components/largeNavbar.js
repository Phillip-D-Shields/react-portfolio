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
  background:#038045;
  padding: 15px;
  transition: 0.5s;
  color: #F2D8CE;
  display: flex;

  &:hover {
    background: #F23D3D;
    transform: translateX(30px);
    color: #33311A;

    &:before {
      background: #B32D2D;
    }
    &:after {
      background: #731D1D;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    background:  #02733E;
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
    background: #025930;
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
            home
          </Link>{" "}
        </StyledLi>

        <StyledLi style={{ zIndex: 3 }}>
          <Link href="/about">
            about
          </Link>{" "}
        </StyledLi>

        <StyledLi style={{ zIndex: 2 }}>
          <Link href="/portfolio">
            portfolio
          </Link>{" "}
        </StyledLi>
        
        <StyledLi style={{ zIndex: 1 }}>
          <Link href="/contact">
            contact
          </Link>{" "}
        </StyledLi>
      
      </UlContainer>
    
    </NavContainer>
  );
}
