/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Card from '..';

jest.mock('../../../static/img/icons.svg', () => 'icons.svg');

let component;
let wrapper;
describe('Card components', () => {
  beforeAll(() => {
    component = (
      <Card>
        <h1>test</h1>
        <div>
          <p>description</p>
        </div>
      </Card>
    );
    wrapper = shallow(component);
  });
  it('should be exist', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should be render children', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });
  it('should be with icon', () => {
    wrapper = shallow(
      <Card icon={{ name: 'menu-nav' }}>
        <p>test</p>
      </Card>,
    );
    expect(wrapper.find('Icon')).toHaveLength(1);
  });
  it('should match the snapshot', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
