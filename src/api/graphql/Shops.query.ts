import { gql } from '@apollo/client';

const GET_SHOPS = gql`
  query Shops {
    shops {
      id
      uuid
      name
      logo {
        url
      }
      createdAt
      updatedAt
    }
  }
`;

export default GET_SHOPS;
