import React from 'react';
import { Form } from 'antd';
import { RadioButton } from '@aia-digital/ui-library';
import styled from 'styled-components';
import { objectOf, any, string, number, bool, shape, func } from 'prop-types';
import withReduxField from './withReduxField';
import Label from '../Label';

const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

RadioButtonWrapper.displayName = 'Wrapper';

const Radio = props => {
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
  } = props;
  const hasError = invalid;
  let options = [];
  if (fieldval && fieldval.type === 'static' && fieldval.values)
  options = fieldval.values;
  const onChangeRadio = e => onChange(e.target.value);
  return (
    <Form.Item
      label={<Label>{label}</Label>}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
      help={hasError && <Label error>{error}</Label>}
      hasFeedback={hasFeedback && hasError}
      extra={extra}
      validateStatus={hasError ? 'error' : 'success'}
      colon={colon}
    >
      <RadioButtonWrapper>
        {options.map(item => (
          <div key={item.value} className="margin-right-m">
            <RadioButton
              onChange={onChangeRadio}
              name={name}
              value={item.value}
            >
              {item.name}
            </RadioButton>
          </div>
        ))}
      </RadioButtonWrapper>
    </Form.Item>
  );
};

Radio.propTypes = {
  fieldval: objectOf(any).isRequired,
  label: string,
  labelCol: objectOf(number),
  wrapperCol: objectOf(number),
  // help: string,
  extra: string,
  hasFeedback: bool,
  colon: bool,
  // required: bool,
  input: shape({
    name: string,
    onBlur: func,
    onChange: func,
    onDragStart: func,
    onDrop: func,
    onFocus: func,
    value: string,
  }).isRequired,
  meta: shape({
    touched: bool,
    invalid: bool,
    error: string,
  }).isRequired,
};
Radio.defaultProps = {
  label: null,
  labelCol: null,
  wrapperCol: null,
  // help: '',
  extra: '',
  hasFeedback: false,
  colon: false,
  // required: false,
};

export const RadioTest = Radio;
export default withReduxField(Radio);
