import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form/immutable';

// import jest-styled-components for snapshot styled components
import 'jest-styled-components';
import renderer from 'react-test-renderer';

// import components to be tested
import InputComponent, {
  StyledFormItem,
  StyledInput,
  InputTest,
} from '../DatePicker';
import { theme } from '../../../utils/constants';

describe('Input Component', () => {
  it('should have redux-form Field"', () => {
    const component = shallow(<InputComponent name="test" />);

    expect(component.find(Field).exists()).toBe(true);
  });

  it('should render StyledFormItem styles correctly', () => {
    const tree = renderer.create(<StyledFormItem theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render StyledInput styles correctly', () => {
    const tree = renderer.create(<StyledInput theme={theme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('Input', () => {
    it('must be exists', () => {
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
      };
      const wrapper = shallow(<InputTest {...mockProps} />);
      expect(wrapper.exists()).toBe(true);
    });
    describe('When hasError is true', () => {
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
      };
      const wrapper = shallow(<InputTest {...mockProps} />);
      it('should be error in StyledFormItem', () => {
        expect(wrapper.find(<StyledFormItem help label />));
      });
      it('should have a correct validate status', () => {
        expect(wrapper.find(<StyledFormItem validateStatus />));
      });
    });
    describe('When hasError is false', () => {
      const mockProps = {
        input: {
          name: 'test-name',
          value: 'test value',
        },
        meta: {
          touched: true,
          invalid: false,
          error: 'MOCK ERROR',
        },
      };
      const wrapper = shallow(<InputTest {...mockProps} />);
      it('should have no error in StyledFormItem', () => {
        expect(wrapper.find(<StyledFormItem help />));
      });
      it('should have a correct validate status', () => {
        expect(wrapper.find(<StyledFormItem validateStatus />));
      });
    });
    describe('When hasError and hasFeedback are true', () => {
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
      };
      const wrapper = shallow(<InputTest {...mockProps} />);
      it('should have error in StyledFormItem', () => {
        expect(wrapper.find(<StyledFormItem hasFeedback />));
      });
    });
  });
});
