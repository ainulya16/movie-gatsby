/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import QuickSection from '../index';

describe('Quick Section', () => {
  it('should be exists ', () => {
    const wrapper = shallow(<QuickSection />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    const tree = renderer.create(<QuickSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
