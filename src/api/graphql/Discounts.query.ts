import { gql } from '@apollo/client';

const GET_DISCOUNTS = gql`
  query Discounts {
    discounts {
      uuid
      name
      description
      shop {
        name
      }
    }
  }
`;

export default GET_DISCOUNTS;
