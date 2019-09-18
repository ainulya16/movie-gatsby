import React from 'react';
import { shallow } from 'enzyme';
// import { Field } from 'redux-form/immutable';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button Component', () => {
  //   it('should have redux-form Field', () => {
  //     const component = shallow(<Button name="test" />);
  //     expect(component.find(Field).exists()).toBe(true);
  //   });
  it('should be exists', () => {
    const mockLabel = 'MOCK LABEL';
    const mockCustomize = {
      action: {
        name: 'populate',
        customize: {
          target: [
            {
              field: 'postalCodeMailing',
              source: 'POSTAL',
            },
            {
              field: 'streetMailing',
              source: 'ADDRESS',
            },
            {
              field: 'blockMailing',
              source: 'BLK_NO',
            },
            {
              field: 'buildingMailing',
              source: 'BUILDING',
            },
          ],
        },
        type: 'api',
        service: 'https://developers.onemap.sg',
        method: 'get',
        api: 'commonapi/search',
        body: {
          searchVal: '{{form.application.values.postalCodeMailing}}',
          returnGeom: 'Y',
          getAddrDetails: 'Y',
        },
      },
    };
    const wrapper = shallow(
      <Button label={mockLabel} customize={mockCustomize} />,
    );
    expect(wrapper.exists()).toBe(true);
  });
  it('should be exists when action type is not api', () => {
    const mockLabel = 'MOCK LABEL';
    const mockCustomize = {
      action: {
        type: 'other',
      },
    };
    const wrapper = shallow(
      <Button label={mockLabel} customize={mockCustomize} />,
    );
    expect(wrapper.exists()).toBe(true);
  });
  it('should match snapshot', () => {
    const mockLabel = 'MOCK LABEL';
    const mockCustomize = {
      action: {
        type: 'api',
      },
    };
    const tree = renderer.create(
      <Button label={mockLabel} customize={mockCustomize} />,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should call defaultActionFn when button clicked', () => {
    const mockLabel = 'MOCK LABEL';
    const mockCustomize = {};
    const wrapper = shallow(
      <Button label={mockLabel} customize={mockCustomize} />,
    );
    wrapper.find('ButtonStyled').simulate('click');
  });
  it('should call defaultActionFn when button clicked', () => {
    const mockLabel = 'MOCK LABEL';
    const mockCustomize = {
      action: {
        type: 'api',
      },
    };
    const wrapper = shallow(
      <Button label={mockLabel} customize={mockCustomize} />,
    );
    wrapper.find('ButtonStyled').simulate('click');
  });
});
