import styled from "@emotion/styled";

interface HeroStylesProps {
  backgroundImage: string;
}

const HeroStyles = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props: HeroStylesProps) =>
    `background-image: url(${props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top; background-attachment: fixed;`};
  ${(props: HeroStylesProps) =>
    !props.backgroundImage ? "background-color: var(--secondaryColor)" : ""};
  color: ${(props: HeroStylesProps) =>
    props.backgroundImage ? "var(--white)" : "var(--offBlack)"};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--shadow);
      z-index: 1;
    }

    @media screen and (min-width: 768px) {
      height: 60vh;
      min-height: 25rem;
    }

    .heroContent {
      position: relative;
      z-index: 2;
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
