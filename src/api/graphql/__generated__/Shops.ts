/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Shops
// ====================================================

export interface Shops_shops_logo {
  __typename: 'PublicFile';
  url: string;
}

export interface Shops_shops {
  __typename: 'Shop';
  uuid: string;
  name: string;
  logo: Shops_shops_logo | null;
  createdAt: any;
  updatedAt: any;
}

export interface Shops {
  shops: Shops_shops[];
}
