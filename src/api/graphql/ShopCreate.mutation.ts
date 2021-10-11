import { gql } from '@apollo/client';

const EDIT_USER = gql`
  mutation CreateShop($uuid: String!, $name: String!) {
    createShop(data: { uuid: $uuid, name: $name }) {
      id
      uuid
      name
    }
  }
`;

export default EDIT_USER;
