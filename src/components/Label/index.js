import styled from 'styled-components';

const StyledLabel = styled.label`
  && {
    color: ${({ theme }) => theme.color.p3};
    font-family: 'AIABody', Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;

    ${({ error, theme }) =>
      error &&
      `
      color: ${theme.color.u2};
      font-style: italic;
      font-size: 11px;

    `}
  }
`;

export default StyledLabel;
