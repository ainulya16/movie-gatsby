/* eslint-env jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Introduction from '../index';

describe('Introduction', () => {
  const introductionTesting = {
    title: 'Some Title',
    imageUrl: 'http://someurl.com/somepic.png',
    description: 'some description',
    linkUrl: 'http://somelinkurl.com',
    linkTitle: 'some link title',
  };

  it('should be exists', () => {
    const wrapper = shallow(<Introduction />);
    expect(wrapper.exists()).toBe(true);
  });

  // Testing title props
  it('should have title exist if props set', () => {
    const wrapper = mount(<Introduction title={introductionTesting.title} />);
    expect(wrapper.prop('title')).toBe(introductionTesting.title);
    wrapper.unmount();
  });
  // Testing image rendered
  it('should have image exist if props set', () => {
    const wrapper = mount(
      <Introduction imageUrl={introductionTesting.imageUrl} />,
    );
    expect(wrapper.prop('imageUrl')).toBe(introductionTesting.imageUrl);
    wrapper.unmount();
  });
  it('should have exactly 1 image', () => {
    const wrapper = mount(
      <Introduction imageUrl={introductionTesting.imageUrl} />,
    );
    expect(wrapper.find('img').length).toEqual(1);
    wrapper.unmount();
  });
  it('should have image with correct alt and src value if props set', () => {
    // eslint-disable-next-line max-len
    const wrapper = mount(
      <Introduction
        title={introductionTesting.title}
        imageUrl={introductionTesting.imageUrl}
      />,
    );
    expect(wrapper.find('img').props().src).toEqual(
      introductionTesting.imageUrl,
    );
    expect(wrapper.find('img').props().alt).toEqual(introductionTesting.title);
    wrapper.unmount();
  });
  // Testing description props
  it('should have description exist if props set', () => {
    const wrapper = mount(
      <Introduction description={introductionTesting.description} />,
    );
    expect(wrapper.prop('description')).toBe(introductionTesting.description);
    wrapper.unmount();
  });
  // Testing linkUrl and linkTitle
  it('should have linkUrl exist if props set', () => {
    const wrapper = mount(
      <Introduction linkUrl={introductionTesting.linkUrl} />,
    );
    expect(wrapper.prop('linkUrl')).toBe(introductionTesting.linkUrl);
    wrapper.unmount();
  });
  it('should have linkTitle exist if props set', () => {
    const wrapper = mount(
      <Introduction linkTitle={introductionTesting.linkTitle} />,
    );
    expect(wrapper.prop('linkTitle')).toBe(introductionTesting.linkTitle);
    wrapper.unmount();
  });
});
