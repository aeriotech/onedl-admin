import { gql } from '@apollo/client';

export const EDIT_PROFILE = gql`
  mutation CreateShop(
    $firstName: String!
    $lastName: String!
    $bio: String!
    $id: Int!
  ) {
    updateProfile(
      data: { firstName: $firstName, lastName: $lastName, bio: $bio }
      where: { id: $id }
    ) {
      id
      firstName
      lastName
      bio
    }
  }
`;

export const DELETE_PFP = gql`
  mutation DeletePFP($id: Int!) {
    updateProfile(data: { profilePicture: null }, where: { id: $id }) {
      id
    }
  }
`;
