import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TextCenter from '../TextCenter';

describe('TextCenter', () => {
  it('should be exists', () => {
    const wrapper = shallow(<TextCenter />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    const tree = renderer.create(<TextCenter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
