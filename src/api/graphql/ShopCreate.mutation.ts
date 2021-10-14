import { gql } from '@apollo/client';

const CREATE_SHOP = gql`
  mutation CreateShop($uuid: String!, $name: String!) {
    createShop(data: { uuid: $uuid, name: $name }) {
      id
      uuid
      name
    }
  }
`;

export default CREATE_SHOP;
