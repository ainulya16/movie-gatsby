import React from 'react';
import { compose, withProps } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import PropTypes from 'prop-types';
import { Form as BaseForm } from 'antd';

export const Form = ({ children, handleSubmit }) => (
  <BaseForm onSubmit={handleSubmit}> {children}</BaseForm>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default compose(
  withProps(),
  reduxForm(),
)(Form);
