/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../index';

describe('Footer', () => {
  it('should be exists', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
