import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { FrequentlyQuestion } from '../index';

describe('Frequently Asked Question', () => {
  it('render correctly faqs component', () => {
    const defaultProp = {
      faqData: {},
      onGetData: jest.fn(),
    };
    const component = renderer
      .create(<FrequentlyQuestion {...defaultProp} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should not show title and frequently asked question', () => {
    const defaultProp = {
      faqData: {},
      onGetData: jest.fn(),
    };
    const component = mount(<FrequentlyQuestion {...defaultProp} />);
    expect(component.find('h2')).toHaveLength(1);
  });
  it('should show correct title', () => {
    const props = {
      faqData: {
        title: 'title mock',
        data: [],
      },
      onGetData: jest.fn(),
    };
    const component = mount(<FrequentlyQuestion {...props} />);
    expect(component.find('h2')).toHaveLength(1);
    expect(
      component
        .find('h2')
        .first()
        .text(),
    ).toEqual('title mock');
  });
  it('should show correct frequently asked question data', () => {
    const props = {
      faqData: {
        title: 'title mock',
        data: [
          {
            id: 1,
            header: 'question mock',
            content: 'answer mock',
          },
        ],
      },
      onGetData: jest.fn(),
    };
    const component = mount(<FrequentlyQuestion {...props} />);
    expect(component.find('.ant-collapse-item')).toHaveLength(1);
    expect(
      component
        .find('.ant-collapse-header')
        .first()
        .text(),
    ).toEqual('question mock');
    // expect(component.find('.answer').first().text()).toEqual('answer mock');
  });
});
