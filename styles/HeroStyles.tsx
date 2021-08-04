import styled from "@emotion/styled";

interface HeroStylesProps {
  backgroundImage: string;
  isHome: boolean;
}

const HeroStyles = styled.div`
  position: relative;
  width: 100%;
  height: ${(props: HeroStylesProps) => (props.isHome ? "60vh" : "50vh")};
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props: HeroStylesProps) =>
    `background-image: url(${props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; background-attachment: fixed;`};
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
    height: ${(props: HeroStylesProps) => (props.isHome ? "90vh" : "60vh")};
    min-height: 25rem;
  }

  .heroContent,
  .heroScrollButton {
    position: relative;
    z-index: 2;
  }

  .heroScrollButton {
    position: absolute;
    bottom: 3rem; 
    right: 3rem;
    cursor: pointer;
    font-family: var(--fontFamilyBase);
    font-weight: bold;
    background-color: var(--white);
    border: 3px solid var(--primaryColor);
    border-radius: var(--borderRadius);
    padding: 0.25rem 1rem;
    transition: background-color 0.3s ease-in-out;

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
