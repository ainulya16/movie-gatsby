import React from 'react';
import { Form } from 'antd';
import { Input as BaseInput } from '@aia-digital/ui-library';
import PropTypes, { any, objectOf } from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';
import withReduxField from './withReduxField';

export const StyledFormItem = styled(Form.Item)`
  .ant-form-item-control-wrapper .ant-form-item-control.has-error span input {
    border: ${({ theme }) => `
      1px solid ${theme.color.u5} !important
    `};
  }
  & div {
    span {
      width: 100%;
    }
  }
`;

export const StyledInput = styled(BaseInput)`
  && {
    @media (max-width: 576px) {
      width: 100%;
    }

    padding: 0px 16px;
    border-radius: ${({ theme }) => theme.color.br9};
    width: ${({ theme }) => theme.color.w9};
    height: ${({ theme }) => theme.color.h9};
    font: ${({ theme }) => theme.color.f9};
    line-height: 2.5;
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

const Input = ({
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
  customize,
  ...props
}) => {
  const hasError = invalid;
  const { componentStyles, componentClass, maxLength } = customize;
  return (
    <StyledFormItem
      // label={label && <Label> {label}</Label>}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
      help={hasError && <Label error> {error}</Label>}
      hasFeedback={hasFeedback && hasError}
      extra={extra}
      validateStatus={hasError ? 'error' : 'success'}
      colon={colon}
      className={componentClass}
    >
      {label && <Label> {label}</Label>}
      <StyledInput
        style={componentStyles}
        maxLength={maxLength || ''}
        size="large"
        {...input}
        {...props}
      />
    </StyledFormItem>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  labelCol: PropTypes.objectOf(PropTypes.number),
  wrapperCol: PropTypes.objectOf(PropTypes.number),
  help: PropTypes.string,
  extra: PropTypes.string,
  hasFeedback: PropTypes.bool,
  colon: PropTypes.bool,
  required: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  customize: objectOf(any),
};
Input.defaultProps = {
  label: null,
  labelCol: null,
  wrapperCol: null,
  help: '',
  extra: '',
  hasFeedback: false,
  colon: false,
  required: false,
  customize: {},
};

export const InputTest = Input;
export default withReduxField(Input);
