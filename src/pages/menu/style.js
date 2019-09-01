import styled from 'styled-components/macro';

import { space } from '../../styles/helpers';
import { mainSectionWidth } from '../../styles/variables';

const WrapperBase = styled.div`
  display: flex;
  width: ${mainSectionWidth}px;
`;

export const DoughOptionsWrapper = styled(WrapperBase)`
  justify-content: space-between;
  margin-top: ${space(2.5)};
`;

export const IngredientOptionsWrapper = styled(WrapperBase)`
  flex-direction: column;
`;
