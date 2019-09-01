import styled from 'styled-components/macro';

import { colors } from './variables';
import { font } from './helpers';

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

export const CallToActionStyle = styled.span`
  font: ${font({ size: 'medium' })};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  border-radius: 4px;
  background: ${props => (props.isDisabled ? colors.greyDark : colors.red)};
  color: ${colors.white};
`;
