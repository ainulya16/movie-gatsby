import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  min-height: 380px;

  /* Extra small devices (phones, less than 768px) */
  @media (max-width: 768px) {
    padding: 0px;
  }
  /* Small devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 10px;
  }
  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 14px;
  }
  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    padding: 14px;
  }
`;

const Section = ({ children }) => (
  <SectionWrapper>
    <Row type="flex" align="middle" justify="center">
      <Col xs={23} sm={23} md={20} lg={20} xl={20}>
        {children}
      </Col>
    </Row>
  </SectionWrapper>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
