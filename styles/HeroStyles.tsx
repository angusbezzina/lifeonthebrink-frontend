import styled from "@emotion/styled";

interface HeroStylesProps {
  backgroundImage: string;
  isHome: boolean;
}

const HeroStyles = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props: HeroStylesProps) =>
    `background-image: url(${props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;`};
  ${(props: HeroStylesProps) =>
    !props.backgroundImage ? "background-color: var(--secondaryColor)" : ""};
  color: ${(props: HeroStylesProps) =>
    props.backgroundImage ? "var(--white)" : "var(--offBlack)"};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--shadow);
    z-index: 1;
  }

  @media screen and (min-width: 768px) {
    height: ${(props: HeroStylesProps) => (props.isHome ? "90vh" : "75vh")};
    min-height: 25rem;
    background-position: center;
    background-attachment: fixed;
  }

  .heroContent,
  .heroScrollButton {
    position: relative;
    z-index: 2;
  }

  .heroScrollButton {
    display: none;
    position: absolute;
    bottom: 3rem;
    right: 3rem;
    cursor: pointer;
    font-family: var(--fontFamilyBase);
    background-color: var(--white);
    border: 3px solid var(--primaryColor);
    border-radius: var(--borderRadius);
    padding: 0.25rem 1rem;
    transition: background-color 0.3s ease-in-out;

    @media screen and (min-width: 768px) {
      display: block;
    }

    &:hover {
      background-color: var(--primaryColor);
      transition: background-color 0.3s ease-in-out;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h6 {
    margin: 2rem 0 0;
  }

  h1 {
    margin: 0;
  }
`;

export default HeroStyles;
