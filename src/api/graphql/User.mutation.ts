import { gql } from '@apollo/client';

const EDIT_USER = gql`
  mutation User($username: String!, $email: String!, $usernameNew: String!) {
    updateUser(
      data: { username: $usernameNew, email: $email }
      where: { username: $username }
    ) {
      username
      email
    }
  }
`;

export default EDIT_USER;
