import React from 'react';
import { Form } from 'antd';
import { ButtonToggle } from '@aia-digital/ui-library';
import {
  string,
  bool,
  number,
  func,
  objectOf,
  any,
  shape,
  arrayOf,
} from 'prop-types';
import styled, { css } from 'styled-components';
import Label from '../Label';
import withReduxField from './withReduxField';

const ButtonToggleContainer = styled.div`
  display: block;
  float: left;
  & div {
    ${props => props.inline && css`
      display: inline-block;
      margin-right: 20px;
    `}
  }
`;

ButtonToggleContainer.displayName = 'ButtonToggleContainer';

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
  rounded,
  radius,
  theme,
  fieldval,
  customize,
  // buttonWidth,
  containerWidth,
  ...props
}) => {
  // const { buttonToggleWidth } = customize;
  const { componentClass } = customize;
  const hasError = invalid;
  const { onChange } = input;
  let buttons = [];
  if (fieldval && fieldval.type === 'static' && fieldval.values)
  buttons = fieldval.values.map(item => ({ text: item.name, value: item.value }));
  return (
    <Form.Item
      label={label && <Label> {label}</Label>}
      wrapperCol={wrapperCol}
      labelCol={labelCol}
      help={hasError && <Label error> {error}</Label>}
      hasFeedback={hasFeedback && hasError}
      extra={extra}
      validateStatus={hasError ? 'error' : 'success'}
      colon={colon}
      {...props}
      className={componentClass}
    >
      <ButtonToggle
        inline={inline}
        onChange={e => onChange(e)}
        buttons={buttons}
        rounded={rounded}
        radius={radius}
        containerWidth={containerWidth}
        // buttonWidth={buttonToggleWidth || buttonWidth}
        theme={theme}
      />
    </Form.Item>
  );
};

Input.propTypes = {
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
    value: string,
  }).isRequired,
  meta: shape({
    touched: bool,
    invalid: bool,
    error: string,
  }).isRequired,
  optionsList: arrayOf(shape({text: string, value: string})).isRequired,
  inline: bool,
  buttons: arrayOf(shape({
      text: string,
      value: string
  })).isRequired,
  rounded: bool,
  // buttonWidth: number,
  containerWidth: string,
  radius: string,
  theme: string,
  fieldval: objectOf(any),
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
  rounded: true,
  // buttonWidth: 100,
  containerWidth: null,
  radius: '20px',
  theme: 'primary1',
  fieldval: {},
  customize: {},
};

export const InputTest = Input;
export default withReduxField(Input);