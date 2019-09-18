import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { Map, fromJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import {
  string,
  node,
  bool,
  any,
  objectOf,
  oneOfType,
  instanceOf,
} from 'prop-types';
import { Image } from '../Image';
import { selectCustomerData } from '../../redux/Customer/selectors';
import { setVarInSentence } from '../../helpers/helper_functions';

const FormSectionWrapper = styled.div`
  margin: 30px 0;
  text-align: center;
  .cspuYg {
    width: auto;
  }
  /* .ant-col,  form .cspuYg, .ant-form-item-control  {
    text-align: center;
  } */
  label {
    font-weight: lighter !important;
  }
  .ant-form-item-children {
    display: inline-block;
  }
  form .btn > last-child {
    margin-top: 50px;
  }

  .featuredImage {
    display: inline-block;
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;
  }
`;

const Title = styled.h4`
  color: #685556;
  font-size: 28px;
  font-family: 'AIAMedium';
  line-height: 1.21;
  text-align: center;
  margin-bottom: 21px;
  padding-bottom: 10px;
  letter-spacing: 0.4px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.29px;
  }
`;

const TitleWrapper = styled.div`
  margin: auto;
  @media (max-width: 1024px) {
    width: 80% !important;
  }
`;

const Subtitle = styled.h6`
  font-size: 18px;
  text-align: center;
  padding-bottom: 10px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Line = styled.hr`
  color: ${props => props.color};
  background-color: ${props => props.color};
  height: 1px;
  width: 90px;
  margin-bottom: 46px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const BackButton = styled.div`
  font-family: AIAMedium;
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: 0.23px;
  text-align: center;
  margin-top: 20px;
  color: #685556;
  cursor: pointer;
`;

const PaymentFormSection = ({
  align,
  title,
  titleStyle,
  customerData,
  subtitle,
  withLine,
  children,
  backUrl,
  image,
  ...attr
}) => {
  const customerDataValue = customerData.toJS();
  const customerName = _.get(customerDataValue, 'name', '');
  const titleResolved = setVarInSentence(title, 'name', customerName);
  return (
    <FormSectionWrapper {...attr}>
      <TitleWrapper style={titleStyle}>
        {title && <Title>{titleResolved}</Title>}
        {image && (
          <Image
            filename={image}
            style={{
              maxWidth: '444px',
              height: 'auto',
              margin: 'auto',
              marginBottom: '20px',
            }}
          />
        )}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TitleWrapper>
      {withLine && <Line color="#d31546" />}
      <div style={{ textAlign: align }} className={`wrap_${align}`}>{children}</div>
    </FormSectionWrapper>
  );
};

PaymentFormSection.propTypes = {
  subtitle: string,
  title: string,
  align: string,
  titleStyle: objectOf(any),
  withLine: oneOfType([bool, string]),
  children: node.isRequired,
  backUrl: objectOf(any),
  image: string,
  customerData: instanceOf(Map),
};

PaymentFormSection.defaultProps = {
  customerData: fromJS({}),
  subtitle: null,
  title: null,
  align: 'center',
  titleStyle: {},
  withLine: false,
  backUrl: {},
  image: '',
};

export const mapStateToProps = createStructuredSelector({
  customerData: selectCustomerData(),
});

export default connect(mapStateToProps)(PaymentFormSection);
