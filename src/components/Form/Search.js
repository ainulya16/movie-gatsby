import React, { useState } from 'react';
import { Form } from 'antd';
import { Search } from '@aia-digital/ui-library';
import PropTypes, { any, objectOf } from 'prop-types';
import styled, { css } from 'styled-components';
import _ from 'lodash';
import Label from '../Label';
import withReduxField from './withReduxField';
import buildAPICALL from '../../helpers/buildCallAPI';

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

export const StyledInput = styled(Search)`
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
  optionsList,
  inline,
  customize,
  change,
  ...props
}) => {
  const hasError = invalid;
  const { componentStyles, action } = customize;
  let { formdata } = props;
  formdata = formdata ? formdata.toJS() : {};
  const source = {
    form: {
      ...formdata,
    },
  };
  const [emptyResultError, setEmptyResultError] = useState('');
  const oneMapCallBack = (response, target, callBack) => {
    const result = response.results[0] ? response.results[0] : {};
    for (let index = 0; index < target.length; index += 1) {
      const element = target[index];
      callBack('application', element.field, result[element.source] || '');
    }
  };

  const actionApiCall = () => {
    const callBackSource = [
      {
        service: 'https://developers.onemap.sg',
        fn: oneMapCallBack,
      },
    ];
    const callBack = change;
    buildAPICALL(
      action.service,
      action.api,
      action.method || 'get',
      action.body || {},
      source || {},
    ).then(res => {
      if (!hasError && res.found === 0) {
        setEmptyResultError('Please input correct postal code');
      } else {
        setEmptyResultError('');
      }
      const service = _.find(callBackSource, x => x.service === action.service);
      service.fn(res, action.customize.target, callBack);
    });
  };

  const sourceFn = [
    {
      name: 'populate',
      fn: actionApiCall,
    },
  ];

  const actionFn = () => {
    const btnAction = !_.isEmpty(action)
      ? _.find(sourceFn, x => x.name === action.name)
      : { fn: () => console.log('OKE') };
    btnAction.fn();
  };

  const onKeyEnter = e => {
    if (e.key === 'Enter') {
      actionFn();
    }
  };

  input.onKeyDown = onKeyEnter;

  return (
    <StyledFormItem
      label={label && <Label> {label}</Label>}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
      help={
        (hasError && <Label error> {error}</Label>) ||
        (emptyResultError && <Label error> {emptyResultError}</Label>)
      }
      hasFeedback={hasFeedback && hasError}
      extra={extra}
      validateStatus={hasError ? 'error' : 'success'}
      colon={colon}
    >
      <StyledInput
        containerStyle={componentStyles}
        style={componentStyles}
        iconRight={{ name: 'zoom', color: '#596C80' }}
        {...input}
        {...props}
        onClickIcon={actionFn}
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
    onClick: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, value: PropTypes.string }),
  ).isRequired,
  inline: PropTypes.bool,
  formdata: objectOf(any),
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
  inline: true,
  formdata: {},
  customize: {},
};

export const InputTest = Input;
export default withReduxField(Input);
