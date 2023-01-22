import styled from 'styled-components';
import { useGetActiveOrderQuery } from '../graphql/queries';
import { Order } from '../generated/types';
import { usdFormatter } from '../utils';

const Logo = styled.img`
  width: 80px;
  padding: 10px;
`;

const Header = styled.header`
  background: #03045e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const OrderTotal = styled.div`
  color: white;
`;

const StyledHeader = () => {
  const { data } = useGetActiveOrderQuery();

  const total = usdFormatter.format(
    (data?.activeOrder as Order)?.subTotal || 0
  );
  return (
    <Header>
      <Logo
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />

      <OrderTotal data-testid="order-total">Order total: {total}</OrderTotal>
    </Header>
  );
};

export default StyledHeader;
