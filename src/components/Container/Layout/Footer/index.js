import React from 'react';
import { Layout } from 'antd/lib';

import styled from 'styled-components';
import QuickSection from '../../../QuickSection';

const DefaultWrapper = styled.div`
  margin-top: 50px;
  .hidenSP {
    display: inline-block;
  }
  .hiddenPC {
    display: none;
  }
  @media (max-width: 767px) {
    .hiddenSP {
      display: none;
    }
    .hiddenPC {
      display: inline-block;
    }
  }
`;
const { Footer: AntdFooter } = Layout;

const children = {
 copyright : 'AIA ©2019 Created by AIA Teams',
 urlTermsOfUse : '/PA100/terms-of-use'
}

const Footer = () => (
  <DefaultWrapper>
    <AntdFooter className="text-center">{children}</AntdFooter>
    <QuickSection className="quick-section" />
  </DefaultWrapper>
);

export default Footer;
