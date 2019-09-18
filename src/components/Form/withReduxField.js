import React from 'react';
import { Field } from 'redux-form/immutable';
import PropTypes from 'prop-types';

const withReduxField = WrappedComponent => {
  const component = props => {
    const { name } = props;
    return <Field component={WrappedComponent} {...props} name={name} />;
  };
  component.propTypes = {
    name: PropTypes.string.isRequired,
  };
  return component;
};

export default withReduxField;
