import { gql } from '@apollo/client';

const CREATE_DISCOUNT = gql`
  mutation Discounts(
    $name: String!
    $description: String!
    $shopId: Int!
    $imageId: Int
    $thumbnailId: Int
  ) {
    createDiscount(
      data: {
        name: $name
        description: $description
        shopId: $shopId
        imageId: $imageId
        thumbnailId: $thumbnailId
      }
    ) {
      id
    }
  }
`;

export default CREATE_DISCOUNT;
