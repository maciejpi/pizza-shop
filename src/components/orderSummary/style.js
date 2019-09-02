import styled from 'styled-components/macro';

import { colors } from '../../styles/variables';
import { space } from '../../styles/helpers';

export const Aside = styled.aside`
  width: 350px;
  margin-top: ${space(5)};
`;

export const AsideInner = styled.div`
  padding: ${space(2)} ${space(2)} ${space(4)};
  background-color: ${colors.white};
`;

export const EmptyBasketInfo = styled.p`
  margin-top: ${space(5)};
  text-align: center;
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${space(2)};
  &:first-of-type {
    margin-top: ${space(4)};
  }
`;

export const WithIngs = styled.p`
  margin-top: ${space()};
  display: ${props => props.isHidden && 'none'};
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.black};
  margin-top: ${space(4)};
  padding-top: ${space(2)};
`;

export const SummaryTitle = styled.h2`
  margin-top: ${space()};
  text-align: center;
`;
