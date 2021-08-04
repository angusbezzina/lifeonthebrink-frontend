import styled from "@emotion/styled";

interface ContainerStylesProps {
  flexDirection?: string; 
  justify?: string; 
  align?: string; 
}

const ContainerStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: ${(props: ContainerStylesProps) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props) => props.justify ? props.justify : "flex-start"};
  align-items: ${(props) => props.align ? props.align : "flex-start"};

  .content {
    margin: 2rem 0 4rem;
  }
`;

export default ContainerStyles;
