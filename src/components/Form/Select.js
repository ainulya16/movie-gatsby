import React from 'react';
import { Form } from 'antd';
import { Select as SelectDefault } from '@aia-digital/ui-library';
import {
  arrayOf,
  shape,
  string,
  number,
  bool,
  objectOf,
  oneOfType,
  func,
  any,
} from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';
import withReduxField from './withReduxField';

export const StyledFormItem = styled(Form.Item)`
  .ant-form-item-control-wrapper .ant-form-item-control.has-error select {
    border: ${({ theme }) => `
      1px solid ${theme.color.u5}  }
    `};
  }
  & div {
    span {
      width: 100% !important;
    }
    select {
      width: 335px;
    }
  }
`;

export const StyledInput = styled(SelectDefault)`
  && {
    @media (max-width: 576px) {
      width: 100%;
    }
    -webkit-appearance: none;
    border-radius: ${({ theme }) => theme.color.br9};
    width: 100%;
    height: ${({ theme }) => theme.color.h9};
    font: ${({ theme }) => theme.color.f9};
    padding: 8px 16px;
    margin-top: 5px;
    color: ${({ theme }) => theme.color.c9};
    background-color: ${({ theme }) => theme.color.b9};
    background-image: url('../../../icons/arrow-down.png');
    background-position: center right;
    background-repeat: no-repeat;
    font-weight: 400;
    border: ${({ theme }) => theme.color.bd9 || '1 px solid #ccc'};
    &:focus {
      color: ${({ theme }) => theme.color.c9};
      border: ${({ theme }) => theme.color.bd9 || '1 px solid #ccc'};
      outline: none;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }
`;

const Select = ({
  label,
  labelCol,
  wrapperCol,
  help,
  extra,
  hasFeedback,
  colon,
  required,
  placeholder,
  input,
  meta: { invalid, error },
  dataoptions,
  customize,
  ...props
}) => {
  const hasError = invalid;
  const { componentStyles, componentClass } = customize;
  const onChange = e => {
    input.onBlur(e);
    return input.onChange(e.target.value);
  };
  return (
    <StyledFormItem
      label={label && <Label> {label}</Label>}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
      help={hasError && <Label error> {error}</Label>}
      hasFeedback={hasFeedback && hasError}
      extra={extra}
      validateStatus={hasError ? 'error' : 'success'}
      colon={colon}
      className={componentClass}
    >
      <SelectDefault
        size="large"
        {...input}
        onChange={onChange}
        {...props}
        style={componentStyles}
      >
        <option disabled key={0} value="">
          {placeholder}
        </option>
        {dataoptions.map(({ value, label: optionLabel }, index) => (
          <option key={`${index + 1}${value}`} value={value}>
            {optionLabel}
          </option>
        ))}
      </SelectDefault>
    </StyledFormItem>
  );
};

Select.propTypes = {
  label: string,
  labelCol: objectOf(number),
  wrapperCol: objectOf(number),
  help: string,
  extra: string,
  hasFeedback: bool,
  colon: bool,
  required: bool,
  placeholder: string,
  dataoptions: arrayOf(
    shape({
      value: oneOfType([string, number]),
      label: string,
    }),
  ),
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
  customize: objectOf(any),
};
Select.defaultProps = {
  label: null,
  labelCol: null,
  wrapperCol: null,
  help: '',
  extra: '',
  placeholder: 'Please Select',
  hasFeedback: false,
  colon: false,
  required: false,
  dataoptions: [],
  customize: {},
};

export const InputTest = Select;
export default withReduxField(Select);
