import styled from 'styled-components';
import { Button } from '@aia-digital/ui-library';

export default styled(Button)`
  width: ${({ theme }) => theme.color.w9};
  font: ${({ theme }) => theme.color.f9};
  color: #fff;
  border-radius: 5px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(233, 24, 80, 1) 0%,
    rgba(200, 11, 62, 1) 100%
  );
  height: 50px !important;
  font-weight: bold;
  max-width: unset !important;
  display: inline-block;
  margin: auto;
`;
