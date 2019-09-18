import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const LineDefault = styled.hr`
  color: ${props => props.color};
  background-color: ${props => props.color};
  height: 1px;
  width: ${props => props.width || '100%'};
`;

const Line = ({ color, ...attr }) => (
  <LineDefault color={color} {...attr} />  
);

Line.propTypes = {
  color: string,
};

Line.defaultProps = {
  color: '#d31546',
};

export default Line;
