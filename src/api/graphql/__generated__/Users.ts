/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users_profile_profilePicture {
  __typename: 'PublicFile';
  url: string;
}

export interface Users_users_profile {
  __typename: 'Profile';
  firstName: string;
  lastName: string;
  profilePicture: Users_users_profile_profilePicture | null;
}

export interface Users_users {
  __typename: 'User';
  username: string;
  email: string;
  profile: Users_users_profile;
  emailConfirmed: boolean;
  ageConfirmed: boolean;
}

export interface Users {
  users: Users_users[] | null;
}
