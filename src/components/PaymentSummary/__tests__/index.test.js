import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PaymentComponent from '../index';

describe('Payment component', () => {
  let wrapper;
  const totalPaymentTesting = 400;
  beforeEach(() => {
    wrapper = shallow(<PaymentComponent totalPayment={totalPaymentTesting} />);
  });
  it('should be exists', () => {
    expect(wrapper).toBeDefined();
  });
  // it('should contain 1 Card component', () => {
  //   expect(wrapper.find(Card)).toHaveLength(1);
  // });
  it('should match the snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
