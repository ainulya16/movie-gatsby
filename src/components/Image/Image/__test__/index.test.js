import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { StaticQuery } from 'gatsby';
import Image from '..';
// images: allFile {
//   edges {
//     node {
//       relativePath
//       name
//       childImageSharp {
//         sizes(maxWidth: 600, quality:100) {
//           ...GatsbyImageSharpSizes
//         }
//       }
//     }
//   }
// }
beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
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
    }),
  );
});

describe('Image Component', () => {
  it('should be exist', () => {
    const component = shallow(<Image filename="aia-logo-white.png" />);
    expect(component.exists()).toBe(true);
  });
  it('should match snapshot', () => {
    const tree = renderer
      .create(<Image filename="aia-logo-white.png" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot with no exist filename', () => {
    const tree = renderer
      .create(<Image filename="aia-logo-white-not-exist.png" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
