import { render } from '@testing-library/react';
import ProductList, { ProductCard } from './ProductList';
import { SearchResult } from '../generated/types';
import { MockedProvider } from '@apollo/client/testing';

describe('ProductList', () => {
  it('renders a list of product cards', () => {
    const items = [
      {
        productVariantId: '1',
        productVariantName: 'Product 1',
        productAsset: { preview: 'image-url' },
        description: 'Product 1 Description',
        price: { value: 100 },
      },
      {
        productVariantId: '2',
        productVariantName: 'Product 2',
        productAsset: { preview: 'image-url' },
        description: 'Product 2 Description',
        price: { value: 200 },
      },
    ] as SearchResult[];
    const { getAllByTestId } = render(
      <MockedProvider>
        <ProductList items={items} />
      </MockedProvider>
    );
    expect(getAllByTestId('product-card')).toHaveLength(2);
  });
});

describe('ProductCard', () => {
  it('renders the product image, title, description, and price', () => {
    const item = {
      productVariantId: '1',
      productVariantName: 'Product 1',
      productAsset: { preview: 'image-url' },
      description: 'Product 1 Description',
      price: { value: 100 },
    } as SearchResult;
    const { getByAltText, getByText } = render(
      <MockedProvider>
        <ProductCard item={item} />
      </MockedProvider>
    );
    expect(getByAltText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 1 Description')).toBeInTheDocument();
    expect(getByText('$100.00')).toBeInTheDocument();
  });
});
