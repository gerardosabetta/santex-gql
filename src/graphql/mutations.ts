import { gql, useMutation } from '@apollo/client';
import { GET_ACTIVE_ORDER } from './queries';

const ADD_TO_CART = gql`
  mutation AddToCart($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
      }
    }
  }
`;

export const useAddToCartMutation = () => {
  return useMutation(ADD_TO_CART, {
    refetchQueries: [{ query: GET_ACTIVE_ORDER }],
  });
};
