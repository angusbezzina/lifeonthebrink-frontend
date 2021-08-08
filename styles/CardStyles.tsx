import styled from "@emotion/styled";

type CardStylesProps = {
  flex?: boolean;
};

const CardStyles = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem 0;
  padding: 2rem;
  background-color: var(--white);
  border: 1px solid var(--transparent);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);

  @media screen and (min-width: 768px) {
    ${(props: CardStylesProps) => (props.flex ? `display: flex;` : "")};
    margin: 0 0 4rem;

    &:last-child {
      margin: 0;
    }
  }

  .cardPhoto {
    width: 100%;
    height: 300px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (min-width: 768px) {
      width: 30%;
      height: 500px;
      background-size: cover;
    }
  }

  .cardContent {
    margin: 2rem 0 0;
    text-align: center;

    @media screen and (min-width: 768px) {
      width: 70%;
      height: 100%;
      margin: 0;
      padding: 2rem;
      text-align: left;
    }
  }

  .cardSocialLinks {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 0;

    @media screen and (min-width: 768px) {
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      margin: 0;
    }
  }

  .cardSocialLink {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem 0 0;
    transition: color 0.3s ease-in-out;

    svg {
      height: 1.25rem;
      width: auto;
    }

    &:hover {
      color: var(--primaryColor);
      transition: color 0.3s ease-in-out;
    }

    &::after {
      display: none;
    }
  }

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
