import styled from 'styled-components/macro';

import { colors } from '../styles/variables';
import { font } from '../styles/helpers';

export const ClickAreaBase = styled.span`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: ${colors.white};
  cursor: pointer;
`;

export const ItemName = styled.span`
  font: ${font({ size: 'medium' })};
`;

export const ItemPrice = styled.span`
  font: ${font({ size: 'medium', weight: 'bold' })};
`;
