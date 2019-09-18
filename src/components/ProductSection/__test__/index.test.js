/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductSection from '../index';

describe('ProductSection', () => {
  const productSectionTesting = {
    title: 'Some Title',
    description: 'Some Description',
    additionalDescription: 'Some Additional Description',
  };
  it('should be exists', () => {
    // eslint-disable-next-line max-len
    const wrapper = shallow(
      <ProductSection
        title={productSectionTesting.title}
        description={productSectionTesting.description}
      />,
    );
    expect(wrapper.exists()).toBe(true);
  });
  // Testing all props exists
  it('should have title exist if all props set', () => {
    // eslint-disable-next-line max-len
    const wrapper = mount(
      <ProductSection
        title={productSectionTesting.title}
        description={productSectionTesting.description}
        additionalDescription={productSectionTesting.additionalDescription}
      />,
    );
    expect(wrapper.prop('title')).toBe(productSectionTesting.title);
    expect(wrapper.prop('description')).toBe(productSectionTesting.description);
    expect(wrapper.prop('additionalDescription')).toBe(
      productSectionTesting.additionalDescription,
    );
    wrapper.unmount();
  });
  it('should have empty string on 3rd TextResponsive children if additionalDescription is null', () => {
    // eslint-disable-next-line max-len
    const wrapper = shallow(
      <ProductSection
        title={productSectionTesting.title}
        description={productSectionTesting.description}
        additionalDescription={null}
      />,
    );
    const addDescriptionResponsive = wrapper
      .find('TextResponsive')
      .at(2)
      .prop('children');
    expect(addDescriptionResponsive).toEqual('');
    wrapper.unmount();
  });
});
