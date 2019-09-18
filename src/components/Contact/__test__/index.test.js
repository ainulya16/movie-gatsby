import React from 'react';
import renderer from 'react-test-renderer';
import Contact from '../index';

describe('Contact', () => {
  it('should be match snapshot', () => {
    const component = renderer.create(<Contact />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
