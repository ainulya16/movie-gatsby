import React from 'react';
import renderer from 'react-test-renderer';
import PreviousNext from '../index';

describe('Previous Next', () => {
  it('should match snapshot', () => {
    const value = renderer.create(<PreviousNext>Next</PreviousNext>).toJSON();
    expect(value).toMatchSnapshot();
  });
});
