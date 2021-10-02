import { gql } from '@apollo/client';

const GET_USERS = gql`
  query Users {
    users {
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
    }
  }
`;

export default GET_USERS;
