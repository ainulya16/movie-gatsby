import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const TitleWrapper = styled.div`
  width: ${props => props.width || '100%'};
  height: 24px;
  font-family: AIAMedium;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${props => props.color || '#424242'};
  background-color: ${props => props.color};
  margin-bottom: 10px;
  margin-top: 15px;
`;

const Title = ({ color, width, label }) => (
  <TitleWrapper color={color} width={width}>
    {label}
  </TitleWrapper>
);

Title.propTypes = {
  width: string,
  color: string,
  label: string,
};

Title.defaultProps = {
  width: null,
  color: null,
  label: 'Personal details',
};

export default Title;
