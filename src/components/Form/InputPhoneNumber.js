import React from 'react';
import { Form } from 'antd';
import { InputPhoneNumber } from '@aia-digital/ui-library';
import PropTypes, { any } from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';
import withReduxField from './withReduxField';

const InputPhoneNumberContainer = styled.div`
  .ant-form-item-control-wrapper
    .ant-form-item-control.has-error
    .ant-form-item-children {
    border: ${({ theme }) => `
      1px solid ${theme.color.u5} !important
    `};
    border-radius: 17px;
  }
  width: 100%;
`;

InputPhoneNumberContainer.displayName = 'InputPhoneNumberContainer';

/**
 *
 * ?USAGE
 * <CheckBoxGroup name="checkbox"
 * optionsList={[{text: 'email', value: 'email'}, {text: 'phone', value: 'phone'}]}
 * onChange={e=>console.log(e)}/>
 */
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
  ...props
}) => {
  const hasError = invalid;
  const { onChange } = input;
  
  const { componentClass } = customize;
  const onBlur = value => {
    input.onBlur({ target: { value } });
    return input.onChange(value);
  };

  const { value } = input;
  const valueNumber = value && value.slice(3);
  const valueCode = value && value.slice(0, 3);

  return (
    <InputPhoneNumberContainer>
      <Form.Item
        label={label && <Label> {label}</Label>}
        wrapperCol={wrapperCol}
        labelCol={labelCol}
        help={hasError && <Label error> {error}</Label>}
        hasFeedback={hasFeedback && hasError}
        extra={extra}
        validateStatus={hasError ? 'error' : 'success'}
        colon={colon}
        className={componentClass}
        {...props}
      >
        <InputPhoneNumber
          inline={inline}
          initNumber={valueNumber}
          initCode={valueCode}
          onChange={e => {
            onChange(e);
          }}
          onBlur={onBlur}
        />
      </Form.Item>
    </InputPhoneNumberContainer>
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
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, value: PropTypes.string }),
  ).isRequired,
  inline: PropTypes.bool,
  customize: PropTypes.objectOf(any),
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
  customize: {},
};

export const InputTest = Input;
export default withReduxField(Input);
