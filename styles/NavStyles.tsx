import styled from "@emotion/styled";

type NavStyleProps = {
  active: boolean;
}

const NavStyles = styled.nav`
  display: flex;

  a {
    position: relative;
    display: inline-block;
    margin: 0 0.5rem;
    color: ${(props: NavStyleProps) =>
      props.active ? `var(--offBlack)` : `var(--white)`};

    &::after {
      content: "";
      position: absolute;
      bottom: -0.33rem;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${(props: NavStyleProps) =>
        props.active ? `var(--offBlack)` : `var(--white)`};
      transform-origin: bottom right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover,
    &:focus,
    &:active {
      &::after {
        transform-origin: bottom left;
        transform: scaleX(1);
        transition: transform 0.3s ease-in-out;
      }
    }
  }
`;

export default NavStyles;
