import React from 'react';
import { Form } from 'antd';
import { DatePicker as DatePickerBase } from '@aia-digital/ui-library';
import {
  objectOf,
  string,
  any,
  number,
  bool,
  shape,
  func,
  object,
} from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import Label from '../Label';
import withReduxField from './withReduxField';
import { setDateConfigByAge } from '../../helpers/helper_functions';

export const StyledFormItem = styled(Form.Item)`
  .ant-form-item-control-wrapper .ant-form-item-control.has-error span input {
    border: ${({ theme }) => `
      1px solid ${theme.color.u5} !important
    `};
  }

  & div {
    span {
      width: ${props => props.inputWidth || 'auto'};
    }
  }

  .ant-calendar-picker-input {
    width: 100%;
    height: ${({ theme }) => theme.color.h9};
    font: ${({ theme }) => theme.color.f9};
    color: ${({ theme }) => theme.color.c9};
    background-color: ${({ theme }) => theme.color.b9};
  }
`;

const disabledDateByConfig = (
  current,
  { minAge, maxAge, dateFormat = 'DD/MM/YYYY' },
) => {
  if (!minAge || !maxAge) {
    return false;
  }

  const minDateCondition =
    current > moment(setDateConfigByAge(minAge), dateFormat);
  const maxDateCondition =
    current < moment(setDateConfigByAge(maxAge), dateFormat);
  return maxDateCondition || minDateCondition;
};

export const StyledInput = styled(DatePickerBase)`
  && .ant-input {
    padding: 8px 16px;
    border-radius: ${({ theme }) => theme.color.br9};
    width: ${props => props.inputWidth || '335px'};
    height: ${({ theme }) => theme.color.h9};
    font: ${({ theme }) => theme.color.f9};
    line-height: 17px !important;
    color: ${({ theme }) => theme.color.c9};
    background-color: ${({ theme }) => theme.color.b9};
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

const DatePicker = ({
  label,
  labelCol,
  wrapperCol,
  help,
  extra,
  hasFeedback,
  colon,
  required,
  input,
  meta: { invalid, error },
  dateFormat,
  minAge,
  maxAge,
  customize,
  ...props
}) => {
  const { componentStyles, inputWidth, componentClass } = customize;
  const hasError = invalid;
  const onChange = (date, dateString) => {
    input.onBlur({
      target: {
        value: dateString,
      },
    });
    return input.onChange(dateString);
  };
  const defaultValue = moment(setDateConfigByAge(minAge), dateFormat);
  return (
    <StyledFormItem
      label={label && <Label>{label}</Label>}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
      help={hasError && <Label error>{error}</Label>}
      hasFeedback={hasFeedback && hasError}
      extra={extra}
      validateStatus={hasError ? 'error' : 'success'}
      colon={colon}
      inputWidth={inputWidth}
      className={componentClass}
    >
      <StyledInput
        style={componentStyles}
        inputWidth={inputWidth}
        // disabledDate={current =>
        //   disabledDateByConfig(current, { minAge, maxAge, dateFormat })
        // }
        defaultValue={defaultValue}
        onChange={onChange}
        format={dateFormat}
        size="large"
      />
    </StyledFormItem>
  );
};

DatePicker.propTypes = {
  config: objectOf(any),
  label: string,
  labelCol: objectOf(number),
  wrapperCol: objectOf(number),
  help: string,
  extra: string,
  hasFeedback: bool,
  colon: bool,
  required: bool,
  input: shape({
    name: string,
    onBlur: func,
    onChange: func,
    onDragStart: func,
    onDrop: func,
    onFocus: func,
    value: object,
  }).isRequired,
  meta: shape({
    touched: bool,
    invalid: bool,
    error: string,
  }).isRequired,
  customize: objectOf(any),
};

DatePicker.defaultProps = {
  label: null,
  labelCol: null,
  wrapperCol: null,
  help: '',
  extra: '',
  hasFeedback: false,
  colon: false,
  required: false,
  config: {},
  customize: {},
};

export const InputTest = DatePicker;
export default withReduxField(DatePicker);
