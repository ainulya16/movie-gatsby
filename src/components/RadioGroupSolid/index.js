import React from 'react';
import { Label } from '@aia-digital/ui-library';
import { Radio } from 'antd';
import styled from 'styled-components';
import { string, arrayOf, bool, func, shape } from 'prop-types';

const DefaultWrapper = styled.div`
  .ant-radio-group-solid
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: #d31145;
    border-color: #d31145;
  }
  .ant-radio-group-solid
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    background: #d31145;
    border-color: #d31145;
    box-shadow: -1px 0 0 0 #d31145;
  }
  .ant-radio-button-wrapper {
    border-radius: unset !important;
    width: 150px;
    text-align: center;
  }

  .ant-radio-button-wrapper-checked {
    box-shadow: -1px 0 0 0 #d31145;
  }

  .ant-radio-button-wrapper {
    margin-right: 10px;
    font-family: 'AIABody', Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 15px;
  }
  .ant-radio-button-wrapper:hover {
    color: rgba(0, 0, 0, 0.65);
  }
`;

const RadioGroupSolid = props => {
  const { label, data, onChange, defaultValue, name } = props;
  return (
    <DefaultWrapper className="radioGroupWrapper">
      {label.length > 0 && <Label>{label}</Label>}
      <Radio.Group
        defaultValue={defaultValue}
        buttonStyle="solid"
        onChange={onChange}
        name={name}
      >
        {data.length > 0 &&
          data.map(item => (
            <Radio.Button key={data.indexOf(item)} value={item.value}>
              {item.text}
            </Radio.Button>
          ))}
      </Radio.Group>
    </DefaultWrapper>
  );
};

RadioGroupSolid.propTypes = {
  label: string,
  data: arrayOf(shape({ value: string, text: string, disabled: bool }))
    .isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
  defaultValue: string,
};
RadioGroupSolid.defaultProps = {
  label: '',
  defaultValue: '',
};

export default RadioGroupSolid;
