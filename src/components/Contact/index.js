import React from 'react';
import styled from 'styled-components';
import { Text } from '@aia-digital/ui-library';
import { Section as SectionBase } from '../Layout';

const Section = styled(SectionBase)`
  & {
    @media (max-width: 991px) {
      margin-top: 28px;
    }
    @media (max-width: 767px) {
      padding-top: 0px;
    }
  }
  h2 {
    text-align: left;
    font-family: 'AIACondensed';
    font-size: 16px;
    color: #bfbdb6;
    margin-bottom: 13px;
    a {
      color: #393d3e;
      font-size: 22px;
    }
    
  }
  .description {
    color: #bfbdb6;
    font-size: 12px;
  }
  @media (max-width: 991px) {
    h2, .description {
      text-align: center;
    }
    h2 {
      margin-bottom: 13px;
    }
    a {
      display: block;
      margin-top: 9px;
    }
  }
`;
export default () => {
  return (
    <Section>
      <Text level="h2" className="go-to">
        GO TO
        <a
          href="https://www.aia.com.sg/en/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}AIA.COM
        </a>
      </Text>
      <Text className="description">
        Visit our corporate site to learn more about AIA
        <br />
        Copyright © 2019 AIA Group Limited and its subsidiaries. All rights
        reserved
      </Text>
    </Section>
  );
}
