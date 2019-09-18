import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@aia-digital/ui-library';
import styled from 'styled-components';

const PopupConfirmWrapper = styled.div``;

class PopupConfirm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    const { visiblePopup } = this.props;
    this.state = {
      visible: visiblePopup,
    };
  }

  closeModal = () => {
    const { handleCancel } = this.props;
    this.setState({
      visible: false,
    });
    if (handleCancel) {
      handleCancel(false);
    }
  };

  render() {
    const { visible } = this.state;
    const { content, title, okText, cancelText, handleOK } = this.props;
    return (
      <PopupConfirmWrapper>
        <Modal
          title={title}
          visible={visible}
          handleOk={handleOK}
          handleCancel={this.closeModal}
          okText={okText}
          cancelText={cancelText}
          content={content}
        />
      </PopupConfirmWrapper>
    );
  }
}

PopupConfirm.propTypes = {
  content: PropTypes.element,
  title: PropTypes.string,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  handleOK: PropTypes.func,
  handleCancel: PropTypes.func,
  visiblePopup: PropTypes.bool,
};

PopupConfirm.defaultProps = {
  content: null,
  title: '',
  okText: 'Yes',
  cancelText: 'No',
  handleOK: null,
  handleCancel: null,
  visiblePopup: false,
};

export default PopupConfirm;
