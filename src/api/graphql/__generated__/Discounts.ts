/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Discounts
// ====================================================

export interface Discounts_discounts_shop {
  __typename: "Shop";
  name: string;
}

export interface Discounts_discounts {
  __typename: "Discount";
  uuid: string;
  name: string;
  shop: Discounts_discounts_shop;
}

export interface Discounts {
  discounts: Discounts_discounts[];
}
