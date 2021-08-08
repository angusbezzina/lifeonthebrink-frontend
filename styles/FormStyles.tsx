import styled from "@emotion/styled";

const FormStyles = styled.form`
  width: 100%;
  background-color: var(--white);
  padding: 2rem;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);

  h2 {
    margin-top: 0;
    text-align: center;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    margin: 1rem 0 0;
    padding: 1rem;
    color: var(--offBlack);
    font-family: var(--fontFamilyBase);
    font-weight: 200; 
    font-size: 1rem;
    background: none;
    background-color: var(--primaryColor);
    border-radius: var(--borderRadius);
    border: none;

    &::placeholder {
      color: rgba(var(--offBlack), 0.25);
    }
  }

  textarea {
    resize: none;
    min-height: 200px;
    margin-bottom: 0;
  }

  button {
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    background-color: var(--transparent);
    border: 0;
    border-radius: var(--borderRadius);
    opacity: 1;
    max-height: none;
    transition: background-color 0.3s ease-in-out, max-height 0.3s ease-in-out;

    &.invalidForm {
      cursor: default;
      max-height: 0;
      padding: 0;
      opacity: 0;
      transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    &:not(.invalidForm) {
      margin-top: 1rem;
      padding: 1rem;
      border: 3px solid var(--primaryColor);
    }

    &:hover {
      background-color: var(--primaryColor);
      color: var(--offBlack);
    }
  }
`;

export default FormStyles;