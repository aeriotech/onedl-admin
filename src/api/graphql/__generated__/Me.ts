/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_profile_profilePicture {
  __typename: "PublicFile";
  url: string;
}

export interface Me_me_profile {
  __typename: "Profile";
  firstName: string;
  lastName: string;
  profilePicture: Me_me_profile_profilePicture | null;
}

export interface Me_me {
  __typename: "User";
  username: string;
  profile: Me_me_profile;
}

export interface Me {
  me: Me_me | null;
}
