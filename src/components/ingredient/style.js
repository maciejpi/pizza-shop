import styled, { css } from 'styled-components/macro';

import { colors } from '../../styles/variables';
import { font, space } from '../../styles/helpers';
import { ClickAreaBase } from '../baseStylingComponents';

export const ClickArea = styled(ClickAreaBase)`
  justify-content: space-between;
  height: 54px;
  border: 1px solid ${colors.greyDark};
  margin-top: ${space(2)};
  padding: 0 ${space(2)};
`;

export const Checkbox = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  border: 1px solid ${colors.greyDark};
  margin-right: ${space(2)};

  ${props =>
    props.isChecked &&
    css`
      justify-content: center;
      align-items: center;
      background-color: ${colors.red};
      &::before {
        content: '✓';
        color: ${colors.white};
        font: ${font({ size: 'medium' })};
      }
    `}
`;

export const CheckboxWrapper = styled.span`
  display: flex;
  align-items: center;
`;
