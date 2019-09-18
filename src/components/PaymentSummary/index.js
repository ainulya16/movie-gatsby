import React from 'react';
import { number } from 'prop-types';
import { Row, Col, Card as DefaultCard } from 'antd';
import styled from 'styled-components';
import Card from '../Card';

const Currency = styled.span`
  position: relative;
  bottom: 20px;
  font-size: 22px;
  font-weight: bold;
`;

const TotalPayment = styled.span`
  font-size: 45px;
  font-weight: bold;
`;

const CouponCodeText = styled.span`
  font-size: 22px;
  font-weight: 900;
`;

const Tag = styled.span`
  background-color: ${({ bgColor }) => bgColor || 'white'};
  border: 2px solid ${({ bgColor }) => bgColor || 'black'};
  color: ${({ textColor }) => textColor || 'black'};
  padding: 5px;
  font-size: 18px;
  font-weight: 900;
`;

const TotalDiscount = styled.span`
  float: right;
  font-size: 20px;
  text-decoration: line-through;
  font-weight: 900;
`;

const CouponContainer = styled(Row)`
  margin: 15px 0px;
`;

const DescriptionContainer = styled.p`
  font-size: 15px;
`;

const CardContainer = styled(Card)`
  max-width: 90%;
  background-color: #f5f5f5;
  /* Extra small devices (phones, less than 768px) */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PaymentComponent = ({ totalPayment }) => {
  return (
    <CardContainer>
      <DefaultCard>
        <Row>
          <Col span={8}>
            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Total</span>
            <h6 style={{ textTransform: 'capitalize', fontSize: '25px' }}>
              {'Payment'}
            </h6>
          </Col>
          <Col span={8} offset={8}>
            <div style={{ float: 'right' }}>
              <Currency>$</Currency>
              <TotalPayment>{totalPayment}</TotalPayment>
            </div>
          </Col>
        </Row>
      </DefaultCard>
      <CouponContainer>
        <Col span={16}>
          <CouponCodeText>Coupon Code</CouponCodeText>
          <Tag style={{ marginLeft: '10px' }}>15OFF</Tag>
        </Col>
        <Col span={8}>
          <TotalDiscount>{`$${parseFloat(totalPayment) + 150}`}</TotalDiscount>
        </Col>
      </CouponContainer>
      <DescriptionContainer>
        {
          'Enim esse exercitation adipisicing ut ex Lorem dolor labore consequat incididunt. Elit nulla amet ea dolore elit magna quis ullamco proident eiusmod cillum velit in et. Ad laborum consequat velit sunt duis commodo cillum. Est mollit consequat pariatur amet culpa qui commodo cupidatat autre. Ad elit cillum id in nostrud consectetur aliqua anim ad reprehenderit ullamco minim.'
        }
      </DescriptionContainer>
    </CardContainer>
  );
};

PaymentComponent.propTypes = { totalPayment: number.isRequired };

export default PaymentComponent;
