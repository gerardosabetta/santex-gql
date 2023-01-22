import styled from 'styled-components';
import { useAddToCartMutation } from '../graphql/mutations';
import { SearchResult, SinglePrice } from '../generated/types';
import Spinner from './Spinner';
import { usdFormatter } from '../utils';

type Props = {
  items: SearchResult[];
};

const ProductList = ({ items }: Props) => {
  return (
    <ProductsContainer>
      {items.map((item) => {
        return <ProductCard item={item} key={item.productVariantId} />;
      })}
    </ProductsContainer>
  );
};

const ProductsContainer = styled.section`
  display: grid;
  grid-gap: 1rem;
`;

export const ProductCard = styled(
  ({ className, item }: { className?: string; item: SearchResult }) => {
    const [addToCart, { loading }] = useAddToCartMutation();

    const price = usdFormatter.format((item.price as SinglePrice).value);
    return (
      <article data-testid="product-card" className={className}>
        <ProductImage
          src={item.productAsset?.preview}
          alt={item.productVariantName}
        />
        <ProductDetails>
          <ProductTitle>{item.productVariantName}</ProductTitle>
          <ProductDescription>{item.description}</ProductDescription>
          <ProductPrice> {price}</ProductPrice>
        </ProductDetails>
        <ProductButton
          onClick={() => {
            if (loading) return;
            addToCart({
              variables: {
                productVariantId: item.productVariantId,
                quantity: 1,
              },
            });
          }}
        >
          {loading ? <Spinner /> : <span>Add to cart</span>}
        </ProductButton>
      </article>
    );
  }
)`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) 3fr 1fr;
  grid-template-rows: 200px;
  border: 1px solid #ccc;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 2fr 1fr;
  }
`;

const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ProductDetails = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: #333;
`;

const ProductButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: #0077b6;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export default ProductList;
