/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../index';

describe('Layout', () => {
  let wrapper;
  let LayoutTest;
  beforeEach(() => {
    LayoutTest = <Layout>Some Testing</Layout>;
    wrapper = shallow(LayoutTest);
  });
  it('should be exists', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should have exactly one header', () => {
    expect(wrapper.find('NavHeader').length).toEqual(1);
  });
  it('should have exactly one footer', () => {
    expect(wrapper.find('Footer').length).toEqual(1);
  });
});
