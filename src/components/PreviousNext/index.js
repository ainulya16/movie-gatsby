import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/index';

const BackButton = styled(Button)`
  padding-right: 68px;
  padding-left: 68px;
  margin-inline-end: 30px;
  border: 1px solid black;
`;

const NextButton = styled(Button)`
  padding-right: 68px;
  padding-left: 68px;
  margin-inline-start: 30px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const PreviousNextComponent = props => {
  const { onClickBack, onClickNext } = props;
  return (
    <ButtonWrapper>
      <BackButton onClick={onClickBack} color="tertiary">
        Back
      </BackButton>
      <NextButton onClick={onClickNext} color="primary">
        Next
      </NextButton>
    </ButtonWrapper>
  );
};

PreviousNextComponent.propTypes = {
  onClickNext: func,
  onClickBack: func,
};

PreviousNextComponent.defaultProps = {
  onClickNext: null,
  onClickBack: null,
};

export default PreviousNextComponent;
