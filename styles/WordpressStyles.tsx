import styled from "@emotion/styled";

const WordpressStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  a {
    display: inline-block;
    margin: 0 0.5rem;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    &:hover {
      color: var(--black);
      transition: color 0.3s ease-in-out;
    }
  }
`;

export default WordpressStyles;
