import styled from "@emotion/styled";

const PageStyles = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .main {
    width: 100%;
    max-width: 1200px;
    padding: 3rem 0 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .content {
    text-align: center;
  }

  .featureTitle {
    text-align: center;
  }
`;

export default PageStyles;
