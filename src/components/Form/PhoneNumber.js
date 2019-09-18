import React from 'react';
import Input from './Input';
import { phoneValidator, required } from '../../helpers/fieldValidator';

export default props => {
  return <Input {...props} validate={[required, phoneValidator]} />;
};
