/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

// jest.mock('next/router');

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should be exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have margin left of 200px when collapsed', () => {
    wrapper.setState({ collapsed: false });
    expect(wrapper.find('Header').prop('style').marginLeft).toEqual('200px');
  });

  // it('should have 2 menu component', () => {
  //   expect(wrapper.find('MenuComponent').length).toEqual(2);
  // });

  // it('check counter increment function is called', () => {
  //   const spy = jest.spyOn(Header.prototype, 'handleToggle');
  //   console.log(wrapper.debug());
  //   wrapper.find('button#toggle-bar').simulate('click');
  //   expect(spy).toHaveBeenCalled();
  // });
});
