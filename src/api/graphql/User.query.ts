import { gql } from '@apollo/client';

const GET_USER = gql`
  query User($username: String!) {
    user(where: { username: $username }) {
      role
      username
      email
      profile {
        firstName
        lastName
        profilePicture {
          url
        }
        bio
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
