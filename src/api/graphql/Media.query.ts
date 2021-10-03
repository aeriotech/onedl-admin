import { gql } from '@apollo/client';

const GET_MEDIA = gql`
  query Media {
    files {
      id
      url
      key
      createdAt
      updatedAt
    }
  }
`;

export default GET_MEDIA;
