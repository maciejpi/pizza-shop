import styled, { css } from 'styled-components/macro';

import { colors, radius } from './variables';
import { font, space } from './helpers';

export const ClickAreaBase = styled.span`
  display: flex;
  align-items: center;
  border-radius: ${radius}px;
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
  border-radius: ${radius}px;
  background: ${props => (props.isDisabled ? colors.greyDark : colors.red)};
  color: ${colors.white};
`;

export const PageWidthStyles = css`
  width: 980px;
  margin: 0 auto;
`;

export const Layout = styled.div`
  ${PageWidthStyles}
  display: flex;
  justify-content: space-between;
  margin-bottom: ${space(10)};
`;
