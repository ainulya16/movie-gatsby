import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import FormDiscoverContainer from '../FormDiscoverContainer';

describe('FormDiscoverContainer', () => {
  it('should be exists', () => {
    const wrapper = shallow(<FormDiscoverContainer />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    const tree = renderer.create(<FormDiscoverContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
