/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../index';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu mode="horizontal" />);
  });

  it('renders Menu', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('has exactly one menu', () => {
    expect(wrapper.find('Menu').length).toEqual(1);
  });

  it('has 4 menu item', () => {
    expect(wrapper.find('MenuItem').length).toEqual(4);
  });

  it('has id of mobile-nav when menu mode is not horizontal', () => {
    wrapper = shallow(<Menu mode="vertical" />);
    const menu = wrapper.find('Menu');
    expect(menu.prop('id')).toEqual('mobile-nav');
  });
});
