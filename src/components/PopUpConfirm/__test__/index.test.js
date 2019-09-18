import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '@aia-digital/ui-library';
import PopupConfirm from '../index';

describe('<PopupConfirm />', () => {
  let component;
  const handleCancel = jest.fn();
  const handleOK = jest.fn();
  beforeEach(() => {
    component = shallow(
      <PopupConfirm handleOK={handleOK} handleCancel={handleCancel} />,
    );
  });
  it('should have exists when rendered', () => {
    expect(component.exists()).toBe(true);
  });
  it('should have a <Modal /> component', () => {
    expect(component.find(Modal)).toHaveLength(1);
  });
  it('should have OK button title as "Yes"', () => {
    const content = component.find(Modal).prop('okText');
    expect(content).toBe('Yes');
  });
  it('should have Cancel button title as "No"', () => {
    const content = component.find(Modal).prop('cancelText');
    expect(content).toBe('No');
  });
  it('state={visible: false} when call closeModal function', () => {
    const popupConfirm = component.instance();
    popupConfirm.closeModal();
    expect(popupConfirm.state).toEqual({ visible: false });
  });
  it('should have handleCancel function', () => {
    const componentInstance = component.instance();
    componentInstance.closeModal();
    expect(componentInstance.props.handleCancel).toEqual(handleCancel);
  });
  it('should have handleOK function', () => {
    const componentInstance = component.instance();
    componentInstance.closeModal();
    expect(componentInstance.props.handleOK).toEqual(handleOK);
  });
  it('Default value of handleCancel function is null', () => {
    component = shallow(<PopupConfirm />);
    const componentInstance = component.instance();
    componentInstance.closeModal();
    expect(componentInstance.props.handleCancel).toEqual(null);
  });
});
