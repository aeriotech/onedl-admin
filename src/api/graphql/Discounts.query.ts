import { gql } from '@apollo/client';

const GET_DISCOUNTS = gql`
  query Discounts {
    discounts {
      uuid
      name
      shop {
        name
      }
      thumbnail {
        url
      }
    }
  }
`;

export default GET_DISCOUNTS;
