import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  min-height: 150px;
  margin-top: 5rem;
`;

const UlContainer = styled.ul`
  position: relative;
  transform: skewY(-15deg);

`;

const StyledLi = styled.li`
  position: relative;
  list-style: none;
  width: 200px;
  background: #3e3f46;
  padding: 15px;
  transition: 0.5s;

  &:hover {
    background: #33a3ee;
    transform: translateX(50px);

    &:before{
        background: #33a3ee;
    }
    &:after {
        background: #33a3ee;
    }

  }

  &:before {
    content: '';
    position: absolute;
    top:0;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #2e3133;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
  }

  &:after {
    content: '';
    position: absolute;
    top:-40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #2e352e;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
      }

  a {
    color: #999;
    text-transform: uppercase;
    display: block;
    letter-spacing: 0.05rem;
    transition: 0.5s;
  }
`;

export default function Navbar() {
  return (
    <NavContainer>
      <UlContainer>
        <StyledLi style={{zIndex: 4}}><a href="#">linklinklink</a> </StyledLi>
        <StyledLi style={{zIndex: 3}}><a href="#">lilinklinklinknk</a> </StyledLi>
        <StyledLi style={{zIndex: 2}}><a href="#">linklinklink</a> </StyledLi>
        <StyledLi style={{zIndex: 1}}><a href="#">linklinklink</a> </StyledLi>
      </UlContainer>
    </NavContainer>
  );
}
