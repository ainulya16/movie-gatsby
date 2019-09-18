import React from 'react';
import { Card as DefaultCard } from 'antd';
import { Input, Label } from '@aia-digital/ui-library';
import styled from 'styled-components';
import Card from '../Card';

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

const ReferralCodeSection = styled.div`
  margin-top: 10px;
`;

const ReferralCodeTittle = styled(Label)`
  font-weight: bold;
  font-size: 15px;
`;

const CardContainer = styled(Card)`
  margin-top: 20px;
  max-width: 90%;
  background-color: #f5f5f5;
  /* Extra small devices (phones, less than 768px) */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CouponCode = () => (
  <CardContainer>
    <DefaultCard>
      <CouponCodeText>Coupon Code</CouponCodeText>
      <Tag style={{ marginLeft: '10px' }}>15OFF</Tag>
      <Tag bgColor="#D31145" textColor="white" style={{ marginLeft: '10px' }}>
        {'APPLIED!'}
      </Tag>
    </DefaultCard>
    <ReferralCodeSection>
      <ReferralCodeTittle> Referral Code </ReferralCodeTittle>
      <Input
        style={{ marginTop: '5px', width: '100%' }}
        placeholder="Referral code"
      />
    </ReferralCodeSection>
  </CardContainer>
);

export default CouponCode;
