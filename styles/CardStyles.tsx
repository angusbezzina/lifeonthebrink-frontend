import styled from "@emotion/styled";

const CardStyles = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 2rem;
  background-color: var(--white);
  border: 1px solid var(--transparent);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
  }

  a {
    position: relative;
    display: inline-block;
    margin: 0 0.5rem;

    &::after {
      content: "";
      position: absolute;
      bottom: -0.33rem;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--offBlack);
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

export default CardStyles;
