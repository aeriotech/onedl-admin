import { gql } from '@apollo/client';

const GET_ME = gql`
  query Me {
    me {
      username
      profile {
        firstName
        lastName
        profilePicture {
          url
        }
      }
    }
  }
`;

export default GET_ME;
