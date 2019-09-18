/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/prop-types */
import React from 'react';
import { objectOf, any, string } from 'prop-types';
import _ from 'lodash';
import { reduxForm } from 'redux-form/immutable';
import styled from 'styled-components';
import { Button, Text, ButtonIcon } from '@aia-digital/ui-library';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input as InputField } from '../Form'
import { selectFormData } from '../../redux/Form/selectors';
import { selectCustomerData } from '../../redux/Customer/selectors';
import {
  verifyOtpCustomer,
  resendOtpCustomer,
} from '../../services/customer';
import {
  getCustomerData,
  getCustomerDataLoaded,
  setFormCustomer,
} from '../../redux/Customer/action';
import Message from "../Message";

const Container = styled.div`
  text-align: center;
  margin-top: 60px;

  .text-error {
    color: #d31045;
  }

  .inlineGroup {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-top: 20pt;
  }

  .button-group {
    margin-top: 20pt;
  }

  button {
    margin-bottom: 10px;
  }

  .message-error {
    color: #d31045;
    display: inline;
  }
  
  .text-button {
    font-size: 16px;
    font-weight: bold;
    font-styke: normal;
    font-height: normal;
    font-stretch: normal;
    letter-spacing: 0.13px;
    cursor: pointer;
    margin-top: -15px;
    text-align: center;
    margin-bottom: 60px;
  }
`;

// const validate = values => {
//   const errors = {};
//   const otpValue = values.get('otp');
//   if (!otpValue) {
//     errors.otp = 'Required';
//     // eslint-disable-next-line no-restricted-globals
//   } else if (isNaN(Number(otpValue))) {
//     errors.otpValue = 'Must be a number';
//   } else if (Number(otpValue) > 99999 || Number(otpValue) < 10000) {
//     errors.otpValue = 'Sorry, you must be 5 number';
//   }
//   return errors;
// };


const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <>
      <div className="inlineGroup">
        <InputField {...input} placeholder={label} type={type} />
      </div>
      {touched && error && <span className="message-error">{error}</span>}
    </>
  );
};

renderField.propTypes = {
  label: string.isRequired,
  type: string.isRequired,
  input: objectOf(any).isRequired,
  meta: objectOf(any).isRequired,
};

const OtpVerify = ({
  customize,
  customer,
  onSetCustomerData,
  clicknext,
}) => {
  const customerData = customer.toJS();
  const [second, setSecond] = React.useState(customize.countDown);
  const [times, setTimes] = React.useState(customize.maxTry);
  const [error, setError] = React.useState('');
  const [errorOtp, setErrorOtp] = React.useState('');
  const [otpValue, setValue] = React.useState('');
  // const [countError, setCountError] = React.useState(0);
  const resend = () => {
    const { token } = customerData;
    resendOtpCustomer({ token }).then(res => {
      onSetCustomerData(res);
    });
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [second, times]);
  const handleRetry = () => {
    setErrorOtp('');
    if (times >= 1) {
      resend();
      setTimes(times - 1);
      setSecond(customize.countDown);
    } else {
      setError(
        'We are sorry but OTP number entered is not correct. Please contact AIA Financial Service Consultant/Insurance Representative or contact our customer service center for assistance',
      );
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const checkVerifyOtp = async () => {
    setErrorOtp('');
    const otpCode = otpValue;
    const { token } = customerData;
    const body = {
      token,
      otp: otpCode,
    };
    try {
      const res = await verifyOtpCustomer(body);
      clicknext();
      onSetCustomerData(res.data);
    } catch (err) {
      if (times >= 1) {
        setTimes(times - 1);
        setErrorOtp('Sorry, Your otp not match please try again!');
      } else {
        clicknext(1,true);
      }
    }
  };

  return !error ? (
    <Container>
      <p className="text-error">{errorOtp}</p>
      <Text fontFamily='AIAMedium' style={{"margin": "auto", "marginBottom": "10px","maxWidth": "300px"}}>{customize.label}</Text>
      <InputField name='otp' type='text' placeholder='Please Enter' onChange={onChange} />
      <Text fontFamily='AIAMedium' className='text-button' onClick={handleRetry}> Resend OTP {second > 0 ? `(${second})` : ''} </Text>
      <ButtonIcon onClick={checkVerifyOtp} iconName="forward" circle size="m" shadow />
    </Container>
  ) : (
    <Message content={error} />
  );
};

OtpVerify.propTypes = {

};

const Form = reduxForm({
  form: 'OtpForm',
})(OtpVerify);

const mapStateToProps = createStructuredSelector({
  customer: selectCustomerData(),
  FromData: selectFormData(),
});

const mapDispatchToProps = {
  onGetData: getCustomerData,
  OnSetFormCustomer: setFormCustomer,
  onSetCustomerData: getCustomerDataLoaded,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
