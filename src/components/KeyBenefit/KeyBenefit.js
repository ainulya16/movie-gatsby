import React from 'react';
import PropTypes, { any, objectOf } from 'prop-types';
import styled from 'styled-components';
import { Accordion } from '@aia-digital/ui-library';

const KeyBenefitStyled = styled.div`
  .titleBenefit {
    text-align: center;
  }

  .titleBenefit div:nth-child(1) {
    color: #d31145;
  }

  .titleBenefit div:nth-child(2) {
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 25px;
  }
`;

const getKeyBenefits = product => {
  let result = [];
  const benefits = product && product.benefits ? product.benefits : [];
  result = benefits.map(item => ({
    header: item.name.en,
    content: item.description.en,
  }));
  return result;
};

const KeyBenefit = props => {
  const { desc, title, data } = props;
  const benefits = getKeyBenefits(data);
  return (
    <KeyBenefitStyled>
      <div className="keyBenefitContent">
        <div className="titleBenefit">
          <div>{desc}</div>
          <div>{title}</div>
        </div>
      </div>
      <Accordion data={benefits} />
    </KeyBenefitStyled>
  );
};

KeyBenefit.propTypes = {
  desc: PropTypes.string,
  title: PropTypes.string,
  data: objectOf(any),
};

KeyBenefit.defaultProps = {
  desc: '',
  title: '',
  data: {},
};

export default KeyBenefit;
