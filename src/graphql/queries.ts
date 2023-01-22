import { QueryHookOptions, gql, useQuery } from '@apollo/client';
import { ActiveOrderResult, SearchResponse } from '../generated/types';

export const SEARCH_PRODUCTS = gql`
  query SearchProducts(
    $term: String
    $take: Int
    $skip: Int
    $facetValueIds: [ID!]
    $sort: SearchResultSortParameter
  ) {
    search(
      input: {
        term: $term
        take: $take
        skip: $skip
        sort: $sort
        facetValueIds: $facetValueIds
        facetValueOperator: AND
      }
    ) {
      items {
        productId
        productName
        description
        productVariantName
        productVariantId
        productAsset {
          preview
        }
        description
        price {
          __typename
          ... on SinglePrice {
            value
          }
          ... on PriceRange {
            min
            max
          }
        }
      }
      facetValues {
        facetValue {
          id
          name
        }
        count
      }

      totalItems
    }
  }
`;

export const useSearchProductsQuery = (options: QueryHookOptions) => {
  return useQuery<{
    search: SearchResponse;
  }>(SEARCH_PRODUCTS, options);
};

export const GET_ACTIVE_ORDER = gql`
  query GetActiveOrder {
    activeOrder {
      lines {
        id
        productVariant {
          name
          price
        }
        quantity
      }
      subTotal
    }
  }
`;

export const useGetActiveOrderQuery = (options?: QueryHookOptions) => {
  return useQuery<{
    activeOrder: ActiveOrderResult;
  }>(GET_ACTIVE_ORDER, options);
};
