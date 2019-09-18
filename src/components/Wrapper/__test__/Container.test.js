import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Container from '../Container';

describe('Container', () => {
  it('should be exists', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
