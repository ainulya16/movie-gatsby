import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form/immutable';
import CheckboxGroup, { InputTest } from '../CheckboxGroup';

describe('CheckBox Group Component', () => {
  it('should have redux-form Field', () => {
    const mockProps = {
      input: {
        name: 'test-name',
        value: 'test value',
      },
      meta: {
        touched: false,
        invalid: false,
        error: 'MOCK ERROR',
      },
      hasFeedback: true,
      fieldval: {
        type: 'api',
        values: [{ value: 'a', text: 'a' }],
      },
    };
    const component = shallow(<CheckboxGroup {...mockProps} />);
    expect(component.find(Field).exists()).toBe(true);
  });
  it('should be exists', () => {
    const mockProps = {
      input: {
        name: 'test-name',
        value: 'test value',
      },
      meta: {
        touched: true,
        invalid: true,
        error: 'MOCK ERROR',
      },
      hasFeedback: true,
      fieldval: {
        type: 'static',
        values: [{ value: 'a', text: 'a' }],
      },
    };
    const wrapper = shallow(<InputTest {...mockProps} />).find('Wrapper');
    expect(wrapper.exists()).toBe(true);
  });
});
