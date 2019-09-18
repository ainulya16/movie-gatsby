import React from 'react';
import { shallow } from 'enzyme';
import { StaticQuery } from 'gatsby';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import Component from '..';

const query = {
  site: {
    siteMetadata: {
      title: 'AIA Singapore',
      description: 'Frontend Web Skeleton',
      author: '@aia',
      keywords: ['aia', 'insurance'],
      menuLinks: [
        { name: 'our product', link: '/' },
        { name: 'life matters', link: '/' },
        { name: 'about aia', link: '/' },
        { name: 'help & support', link: '/' },
        { name: 'my aia', link: '/' },
      ],
    },
  },
  // static query for Logo on Navbar
  images: {
    edges: [
      {
        node: {
          relativePath: 'aia-logo-white.png',
          name: 'aia-logo-white',
          childImageSharp: {
            sizes: {
              base64:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACZ0lEQVQ4y32UW4iNURTHv3MxTMYllzInjTGKya14EEbRpLyQ2+BpxqQhJbyNNDIuk9uLURIvrg8oClFEFPJizCA8kLxRSinyIJ3jt/RfxzpfsuvXXmvvtda391prf0mpVEps2Ay5RAN5LVyEPngPb+ExnIB5wS7n/sVisbxoSlZyMzyT825YAjNhNrTAMXgF16CQDuoBPdh2eA1Lk/8MCwBd8A7mxKAx+gZO+YC5WnoG8nLOeDBshoQ0zYeX0Ki9rG80wl0YLD1v+fBAzBZkql9Ra267CG6kr2B5afZgKpDvFWAs1PCRA8ydME57fptdsN4d6qE3BM8HeRZMsVm6FcjGJ6gNdgU+1uvKclihkzVobSiswmg18wVoDXl9qKD3YUIIugfqTGiFzTAadsJlAlm1J0MVnPITynFb6e/4YdfVusWZa0K35VCL1grn/3ypMsc9dmLJdfC9VDmsJ59Y1c1gC7SZA9zkdFag+lRL5XXVaWqPNXAE/Vwq8CTvJWuZr1q8BDOUr5xaah98sfZIPbse+TzV66qxxVpot76KlQtOTdpvgOGW17C3UQcaBR3RaR2MD/om5aRJ+giuOEzyVnhk7zvYL4QFMaAleqXk4/AZBuC2ctYXqvkN/Z4qvExr7fHZ+Y+hGu5AUUWwFrquvefWZ5I/6gAtyl9nOFjGH/wYlDcy/gCH4QUclOEANnslW/LPol/VP/InnEz/vizZO2AkTIdb9mmc2rTfD/v18SsWhPkoVKloHeWA5aiVlR0Ev2CxXxnnQ5LPWMH+4VNxwiT+9/QMT8NE6VaELsn2CLrD286GOiS/Aa/iv8rymE3HAAAAAElFTkSuQmCC',
              aspectRatio: 1,
              src:
                '/static/626b8c41be4495457c39299e8dab6e35/c0051/aia-logo-white.png',
              srcSet:
                '/static/626b8c41be4495457c39299e8dab6e35/c0051/aia-logo-white.png 80w',
              srcWebp:
                '/static/626b8c41be4495457c39299e8dab6e35/ab258/aia-logo-white.webp',
              srcSetWebp:
                '/static/626b8c41be4495457c39299e8dab6e35/ab258/aia-logo-white.webp 80w',
              sizes: '(max-width: 80px) 100vw, 80px',
            },
          },
        },
      },
    ],
  },
};
beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      ...query,
    }),
  );
});

describe('Layout Component', () => {
  it('should be exist', () => {
    const component = shallow(
      <Component data={query} title="Test Title">
        container
      </Component>,
    );
    expect(component.exists()).toBe(true);
  });

  it('should be use description', () => {
    const component = shallow(
      <Component data={query} description="description test">
        container
      </Component>,
    );
    expect(component.exists()).toBe(true);
  });

  it('should be match snapshot', () => {
    const tree = renderer
      .create(
        <Component data={query} title="Test Title">
          container
        </Component>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be match snapshot without navbar', () => {
    const tree = renderer
      .create(
        <Component data={query} showNavbar={false} title="Test Title">
          container
        </Component>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
