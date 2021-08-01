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
    margin: 1rem 0;
    padding: 1rem;
    color: var(--offBlack);
    font-family: var(--fontFamilyBase);
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
  }

  input[type="submit"] {
    cursor: pointer;
    font-weight: bold;
    background-color: var(--transparent);
    border: 3px solid var(--primaryColor);
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--primaryColor);
      color: var(--offBlack);
    }
  }
`;

export default FormStyles;