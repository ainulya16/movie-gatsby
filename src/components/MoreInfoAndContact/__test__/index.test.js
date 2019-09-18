import React from 'react';
import renderer from 'react-test-renderer';
import MoreInfoAndContact from '../index';

describe('MoreInfoAndContact', () => {
  it('should be match snapshot', () => {
    const component = renderer.create(<MoreInfoAndContact />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
