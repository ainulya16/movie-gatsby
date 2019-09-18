import React from 'react';
import { shallow } from 'enzyme';

// import jest-styled-components for snapshot styled components
import 'jest-styled-components';
import renderer from 'react-test-renderer';

// import components to be tested
import Component from '..';
import { theme } from '../../../utils/constants';

describe('Label Component', () => {
  it('should be exist"', () => {
    const component = shallow(<Component theme={theme}>Label</Component>);
    expect(component.exists()).toBe(true);
  });
  it('should be match snapshot', () => {
    const tree = renderer
      .create(<Component theme={theme}>Label</Component>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should be red as error message style', () => {
    const tree = renderer
      .create(
        <Component theme={theme} error>
          Label
        </Component>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
