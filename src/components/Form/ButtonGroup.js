/* eslint-disable */
import React, { useEffect } from 'react';
import { Form } from 'antd';
import styled from 'styled-components';
import { ButtonGroup as ButtonGroupUI } from '@aia-digital/ui-library';
import withReduxField from './withReduxField';
import Label from '../Label';

const LabelButton = styled.div`
  font-family: 'AIARegular';
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.11px;
  color: #685556;
  padding-bottom: 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: inherit;
  @media (max-width: 480px) {
    button {
      width: 100%;
    }
    button:nth-child(2) {
      margin-right: 0;
    }
  }
`;

const ButtonGroup = props => {
  const {
    label,
    labelCol,
    wrapperCol,
    extra,
    hasFeedback,
    colon,
    input: { name, onChange },
    meta: { invalid, error },
    fieldval,
    defaultValue,
  } = props;
  const hasError = invalid;

  const buttons = (fieldval.values || []).map(value => ({
    text: value.name,
    value: value.value,
  }));

  const onButtonChange = value => {
    onChange(value);
  };

  return (
    <Form.Item
      // label={<Label>{label}</Label>}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
      help={hasError && <Label error>{error}</Label>}
      hasFeedback={hasFeedback && hasError}
      extra={extra}
      validateStatus={hasError ? 'error' : 'success'}
      colon={colon}
    >
      <LabelButton>{label}</LabelButton>
      <Wrapper>
        <ButtonGroupUI
          buttons={buttons}
          rounded
          radius="20px"
          space={15}
          buttonWidth={140}
          initialValue={
            defaultValue && defaultValue.value ? defaultValue.value : ''
          }
          onChange={onButtonChange}
          style={{ marginBottom: '20px' }}
        />
      </Wrapper>
    </Form.Item>
  );
};

export default withReduxField(ButtonGroup);
