import { gql } from '@apollo/client';

const GET_USERS = gql`
  query Users {
    users {
      role
      username
      email
      profile {
        firstName
        lastName
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

export default GET_USERS;
