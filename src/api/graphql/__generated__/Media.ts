/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Media
// ====================================================

export interface Media_files {
  __typename: "PublicFile";
  id: number;
  url: string;
  key: string;
  createdAt: any;
  updatedAt: any;
}

export interface Media {
  files: Media_files[] | null;
}
