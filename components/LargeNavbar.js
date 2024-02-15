import Link from "next/link";
import styled from "styled-components";

export default function LargeNavbar() {
  const NavContainer = styled.nav`
    position: fixed;
    display: flex;
    justify-content: start;
    align-items: center;
    bottom: 12px;
    left: 12px;
    font-size: 1.5rem;
  `;

  const UlContainer = styled.ul`
    position: relative;
    transform: skewY(-15deg);
  `;

  const StyledLi = styled.li`
    position: relative;
    list-style: none;
    width: 225px;
    background: ${(props) => props.theme.navBoxBgMain};
    padding: 15px;
    transition: 0.25s;
    color: ${(props) => props.theme.navBoxFg};
    display: flex;

    &:hover {
      background: ${(props) => props.theme.navBoxHoverMain};
      transform: translateX(30px);

      &:before {
        background: ${(props) => props.theme.navBoxHoverBefore};
      }
      &:after {
        background: ${(props) => props.theme.navBoxHoverAfter};
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -40px;
      width: 40px;
      height: 100%;
      background: ${(props) => props.theme.navBoxBgBefore};
      transform-origin: right;
      transform: skewY(45deg);
      transition: 0.25s;
    }

    &:after {
      content: "";
      position: absolute;
      top: -40px;
      left: 0;
      width: 100%;
      height: 40px;
      background: ${(props) => props.theme.navBoxBgAfter};
      transform-origin: bottom;
      transform: skewX(45deg);
      transition: 0.25s;
    }

    a {
      text-transform: uppercase;
      display: block;
      letter-spacing: 0.05rem;
      transition: 0.25s;
      width: 100%;
      height: 100%;
    }
  `;

  return (
    <NavContainer>
      <UlContainer>
        <StyledLi style={{ zIndex: 4 }}>
          <Link href="/">kia ora</Link>{" "}
        </StyledLi>

        <StyledLi style={{ zIndex: 3 }}>
          <Link href="/past">experience</Link>{" "}
        </StyledLi>

        <StyledLi style={{ zIndex: 2 }}>
          <Link href="/code">code</Link>{" "}
        </StyledLi>
      </UlContainer>
    </NavContainer>
  );
}
