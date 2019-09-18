import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import RadioGroupSolid from '../index';

let component;
const data = [
  { value: 'electronic', text: 'Electronic', disabled: false },
  { value: 'hardCopy', text: 'Hardcopy', disabled: false },
];
const name = 'a';
const onChange = jest.fn();

describe('<RadioGroupSolid />', () => {
  beforeEach(() => {
    component = mount(
      <RadioGroupSolid data={data} name={name} onChange={onChange} />,
    );
  });
  it('should match with snapshot', () => {
    const tree = renderer
      .create(<RadioGroupSolid data={data} name={name} onChange={onChange} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have prop data', () => {
    expect(component.prop('data')).toEqual(data);
  });
  it('should have prop name', () => {
    expect(component.prop('name')).toEqual(name);
  });
  it('should have onChange function', () => {
    expect(component.prop('onChange')).toEqual(onChange);
  });
});
