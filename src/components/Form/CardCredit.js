/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import _ from 'lodash';
import styled from 'styled-components';
import { CardCredit as CardCreditUI } from '@aia-digital/ui-library';
import withReduxField from './withReduxField';

const StyledCardCredit = styled(CardCreditUI)`
  @media (max-width: 375px) {
    width: 296px;
    height: 296px;
    padding: 16px 20px 20px 20px;
    background: red;
  }
`;

const CardCredit = ({
  label,
  labelCol,
  wrapperCol,
  extra,
  hasFeedback,
  colon,
  input,
  meta: { invalid, error },
  fieldval,
  defaultValue,
  ...attr
}) => {
  const { onChange, value } = input;

  const changeCardCreditValue = (val, name) => {
    onChange({ ...value, [name]: _.get(val, 'target.value', val) });
  };

  return (
    <StyledCardCredit
      {...attr}
      cardNumber={value.cardNumber}
      expiry={value.cardExpiry}
      name={value.cardName}
      cvv={value.cardCvv}
      changeCard={e => changeCardCreditValue(e, "cardNumber")}
      changeExpiry={e => changeCardCreditValue(e, "cardExpiry")}
      changeName={e => changeCardCreditValue(e, "cardName")}
      changeCvv={e => changeCardCreditValue(e, "cardCvv")}
    />
  );
};

export default withReduxField(CardCredit);
