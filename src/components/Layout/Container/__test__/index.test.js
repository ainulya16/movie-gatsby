import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Container from '..';

describe('Component: Layout', () => {
  it('should be exist', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper.exists()).toBe(true);
  });
  it('renders Layout default styles', () => {
    const tree = renderer
      .create(
        <Container>
          <p>Test</p>
        </Container>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
