import { gql } from '@apollo/client';

const GET_USER = gql`
  query User($username: String!) {
    user(where: { username: $username }) {
      role
      username
      email
      profile {
        id
        firstName
        lastName
        bio
        profilePicture {
          url
        }
      }
      emailConfirmed
      ageConfirmed
      score
      createdAt
      updatedAt
    }
  }
`;

export default GET_USER;
