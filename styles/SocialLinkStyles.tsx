import styled from "@emotion/styled";

const SocialLinkStyles = styled.div`
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

      @media screen and (min-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    &:hover {
      color: var(--white);
      transition: color 0.3s ease-in-out;
    }
  }
`;

export default SocialLinkStyles;
