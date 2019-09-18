/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TextResponsive from '../index';

describe('Text Responsive', () => {
  it('should renders TextResponsive ', () => {
    const wrapper = shallow(<TextResponsive>Some Children</TextResponsive>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should renders TextResponsive title', () => {
    const wrapper = shallow(
      <TextResponsive isTitle>Some Children</TextResponsive>,
    );
    expect(wrapper.exists()).toBe(true);
  });
  it('should renders TextResponsive content', () => {
    const wrapper = shallow(<TextResponsive>Some Children</TextResponsive>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<TextResponsive>Some Children</TextResponsive>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
