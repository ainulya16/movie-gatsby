import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '..';

describe('Button', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Button>Button Example</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('set width', () => {
    const tree = shallow(<Button width="50px">Button Example</Button>).exists();
    expect(tree).toBeTruthy();
  });
});
