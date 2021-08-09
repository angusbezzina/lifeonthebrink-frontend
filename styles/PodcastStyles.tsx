import styled from "@emotion/styled";

export const PodcastList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0;
`;

export const PodcastListItem = styled.li`
  padding: 1rem;
  margin: 1rem 0;
  background-color: var(--primaryColor);
  border-radius: var(--borderRadius);

  h4 {
    margin-top: 0;
  }

  audio {
    width: 100%;
  }
`;
