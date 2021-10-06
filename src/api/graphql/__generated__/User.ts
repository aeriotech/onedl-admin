/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user_profile_profilePicture {
  __typename: "PublicFile";
  url: string;
}

export interface User_user_profile {
  __typename: "Profile";
  firstName: string;
  lastName: string;
  profilePicture: User_user_profile_profilePicture | null;
  bio: string;
}

export interface User_user {
  __typename: "User";
  role: Role;
  username: string;
  email: string;
  profile: User_user_profile;
  emailConfirmed: boolean;
  ageConfirmed: boolean;
  score: number;
  createdAt: any;
  updatedAt: any | null;
}

export interface User {
  user: User_user | null;
}

export interface UserVariables {
  username: string;
}
