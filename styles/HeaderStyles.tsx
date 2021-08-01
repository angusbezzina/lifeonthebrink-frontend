import styled from "@emotion/styled";

interface HeaderStylesProps {
  active: boolean;
}

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: auto;
  height: 3.75rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
  background-color: ${(props: HeaderStylesProps) =>
    props.active ? `var(--white)` : `var(--transparent)`};
  box-shadow: ${(props: HeaderStylesProps) =>
    props.active ? `var(--boxShadow)` : ""};
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  z-index: 100;

  @media screen and (min-width: 768px) {
    height: 5rem;
  }

  .logoLink {
    position: relative;
    display: block;
    width: 2.75rem;
    height: 2.75rem;

    @media screen and (min-width: 768px) {
      height: 3.75rem;
      width: 3.75rem;
    }

    a {
      color: ${(props: HeaderStylesProps) =>
        props.active ? `var(--offBlack)` : `var(--white)`};
    }

    & > div {
      position: absolute;
    }

    &::after {
      display: none;
    }
  }

  .logo {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: var(--borderRadius);
  }
`;

export default HeaderStyles;
