import React from 'react';
import { string } from 'prop-types';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import TextResponsive from '../TextResponsive';

/**
 * Get options
 * @typedef {Object} GetProps
 * @property {String} title - product title
 * @property {String} description - product description
 * @property {String} additionalDescription - product additional description
 */

const WrapperSection = styled.div`
  text-align: center;
  /* margin: 20px; */
`;

/**
 * Send get request
 * @param {GetProps} getprops - get props
 * @return {Object} response react JSX-component
 */

const ProductSection = ({ title, description, additionalDescription }) => (
  <WrapperSection>
    <Row type="flex" align="middle" justify="center">
      <Col>
        <TextResponsive isTitle>{title}</TextResponsive>
      </Col>
    </Row>
    <Row>
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 21, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        lg={{ span: 10, offset: 2 }}
      >
        <TextResponsive>{description}</TextResponsive>
      </Col>
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 21, offset: 1 }}
        md={{ span: 10, offset: 2, pull: 1 }}
        lg={{ span: 10, offset: 2 }}
      >
        <TextResponsive>{additionalDescription || ''}</TextResponsive>
      </Col>
    </Row>
  </WrapperSection>
);

ProductSection.propTypes = {
  title: string,
  description: string,
  additionalDescription: string,
};

ProductSection.defaultProps = {
  title: 'This is title',
  description: 'This is description',
  additionalDescription: 'additional description',
};

export default ProductSection;
