import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Accordion } from '@aia-digital/ui-library';
import CardBase from '../index';

let renderComponent;
const cardProps = {
  showButton: true,
  onButtonClicked: jest.fn(),
  name: 'Classic',
  totalPremium: 8.1,
  mode: 'monthly',
  benefits: [{name:{en:'name1'}, description:{en:'description1'}, value: 2000}],
  isRecommended: false,
  titleButton: 'SELECT',
};
describe('<CardBase />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<CardBase {...cardProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  beforeAll(() => {
    renderComponent = mount(<CardBase {...cardProps} />);
  });
  it('should have showButton prop', () => {
    expect(renderComponent.prop('showButton')).toBe(cardProps.showButton);
  });
  it('should have onButtonClicked prop', () => {
    expect(renderComponent.prop('onButtonClicked')).toEqual(cardProps.onButtonClicked);
  });
  it('should have name prop', () => {
    expect(renderComponent.prop('name')).toEqual(cardProps.name);
  });
  it('should have totalPremium prop', () => {
    expect(renderComponent.prop('totalPremium')).toEqual(cardProps.totalPremium);
  });
  it('should have mode prop', () => {
    expect(renderComponent.prop('mode')).toEqual(cardProps.mode);
  });
  it('should have benefits prop', () => {
    expect(renderComponent.prop('benefits')).toEqual(cardProps.benefits);
  });
  it('should have isRecommended prop', () => {
    expect(renderComponent.prop('isRecommended')).toEqual(cardProps.isRecommended);
  });
  it('should have titleButton prop', () => {
    expect(renderComponent.prop('titleButton')).toEqual(cardProps.titleButton);
  });
  it('should not display Accordion when benefit data is empty', () => {
    renderComponent = mount(<CardBase mode="test" benefits={[]} />);
    expect(renderComponent.find(Accordion)).toEqual({});
  });
});
