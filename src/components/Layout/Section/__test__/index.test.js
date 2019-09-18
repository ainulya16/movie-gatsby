import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Section from '..';

describe('Component: Layout', () => {
  it('should be exist', () => {
    const wrapper = shallow(<Section />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders Section default styles', () => {
    const tree = renderer
      .create(
        <Section title="title">
          <p>Test</p>
        </Section>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
