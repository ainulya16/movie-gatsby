import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery } from 'gatsby';
import { mount } from 'enzyme';

import IndexComponent from '..';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: 'Title',
          description: 'Description',
          author: 'Author',
        },
      },
    }),
  );
});

describe('Seo Component', () => {
  it('should have Helmet"', () => {
    const component = mount(<IndexComponent />);
    expect(component.find(Helmet).exists()).toBe(true);
  });
  it('should correctly append keyword', () => {
    const mockKeywords = ['MOCK KEY 1', 'MOCK KEY 2'];
    const component = mount(<IndexComponent keywords={mockKeywords} />);
    const expectedResult = [
      { content: 'Description', name: 'description' },
      { content: '', property: 'og:title' },
      { content: 'Description', property: 'og:description' },
      { content: 'website', property: 'og:type' },
      { content: 'summary', name: 'twitter:card' },
      { content: 'Author', name: 'twitter:creator' },
      { content: '', name: 'twitter:title' },
      { content: 'Description', name: 'twitter:description' },
      { content: 'MOCK KEY 1, MOCK KEY 2', name: 'keywords' },
    ];
    expect(component.find(Helmet).prop('meta')).toEqual(expectedResult);
  });
});
