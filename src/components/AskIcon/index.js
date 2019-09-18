import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  background: #596c80;
  color: white;
  font-weight: bolder;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
`;
const AskIcon = props => {
  const { containerStyle, textStyle, ...attr } = props;
  return (
    <Container style={containerStyle} {...attr}>
      <span style={textStyle}>?</span>
    </Container>
  );
};

AskIcon.propTypes = {
  containerStyle: PropTypes.shape(),
  textStyle: PropTypes.shape(),
};

AskIcon.defaultProps = {
  containerStyle: {},
  textStyle: {},
};

export default AskIcon;
