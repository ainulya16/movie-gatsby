import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AskIcon from '..';

describe('Ask Icon', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<AskIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have text "?"', () => {
    const wrapper = shallow(<AskIcon />);
    expect(wrapper.text()).toEqual('?');
  });
});
