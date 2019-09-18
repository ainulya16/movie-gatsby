import React from 'react';
// import jest-styled-components for snapshot styled components
import 'jest-styled-components';
import renderer from 'react-test-renderer';

// import components to be tested
import { Form } from '../Form';

describe('Input Component', () => {
  it('Form component should match the snapshot', () => {
    const tree = renderer
      .create(
        <Form handleSubmit={jest.fn()}>
          {' '}
          <h1>test</h1>{' '}
        </Form>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
