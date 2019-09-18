import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Section from '../Section';

describe('Section', () => {
  it('should be exists', () => {
    const wrapper = shallow(<Section>Some Section</Section>);
    expect(wrapper.exists()).toBe(true);
  });
  it('should match the snapshot', () => {
    const tree = renderer.create(<Section>Some Section</Section>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
