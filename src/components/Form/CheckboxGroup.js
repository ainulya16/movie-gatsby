import React from 'react';
import { Form } from 'antd';
import { Checkbox } from '@aia-digital/ui-library';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Label from '../Label';
import withReduxField from './withReduxField';

const CheckboxContainer = styled.div`
  display: block;
  float: left;
  & div {
    ${props => props.inline && css`
      display: inline-block;
      margin-right: 20px;
    `}
  }
`;

CheckboxContainer.displayName = 'CheckboxContainer';
const StyledCheckbox = styled(Checkbox)`
`;

/**
 * 
 * ?USAGE
 * <CheckBoxGroup name="checkbox"
 * optionsList={[{label: 'email', value: 'email'}, {label: 'phone', value: 'phone'}]} 
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
  ...props
}) => {
  const hasError = invalid;
  const { onChange } = input;
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
    >
      <CheckboxContainer inline={inline}>
      {optionsList.map((item, index) => {
        const isChecked = input.value.indexOf(item.value) !== -1;
        return (
          <StyledCheckbox
            key={item.value}
            name={`${input.value}-${index}`}
            value={item.value}
            checked={isChecked}
            onChange={(e)=>{
              const { checked } = e.target;
              const value = [...input.value];
              if(checked){
                value.push(item.value);
              } else {
                value.splice(value.indexOf(item.value), 1);
              }
              onChange(value);
            }}
          >{item.label}
          </StyledCheckbox>
        );
      })}
      </CheckboxContainer>
    </Form.Item>
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
  optionsList: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, value: PropTypes.string})).isRequired,
  inline: PropTypes.bool
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
};

export const InputTest = Input;
export default withReduxField(Input);