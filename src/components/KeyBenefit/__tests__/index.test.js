import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import KeyBenefit from '../KeyBenefit';

describe('<KeyBenefit />', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<KeyBenefit />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have props data benefits', () => {
    const benefits = {
      benefits: [
        {
          name: {
            en: 'name',
          },
          description: {
            en: 'description',
          },
        },
      ],
    };
    const component = mount(<KeyBenefit data={benefits} />);
    const res = component.prop('data');
    expect(res).toBe(benefits);
  });
});
