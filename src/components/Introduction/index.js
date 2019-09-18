import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextResponsive } from '@aia-digital/ui-library';

const DefaultWrapper = styled.div`
  margin-bottom: 40px;
  .fixImage {
    width: 100%;
    height: auto;
    margin: 20px 0;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .floatButton {
    float: right;
  }
`;

const Introduction = props => {
  const { title, imageUrl, description, linkUrl, linkTitle } = props;
  return (
    <DefaultWrapper>
      <TextResponsive isTitle>{title}</TextResponsive>
      <img className="fixImage" src={imageUrl} alt={title} />
      <TextResponsive>{description}</TextResponsive>
      <div className="floatButton">
        <a href={linkUrl}>{linkTitle}</a>
      </div>
    </DefaultWrapper>
  );
};

Introduction.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  linkUrl: PropTypes.string,
  linkTitle: PropTypes.string,
};

Introduction.defaultProps = {
  title: 'ABOUT AIA SINGAPORE',
  imageUrl: 'https://i.gyazo.com/66578222484d8855bfc14aa20be8a8d3.jpg',
  description: `
  Having served generations of Singaporeans for close to 90 years since 1931, we understand what matters to them most – good health and being financially prepared for every stage in life.
Placing our customers at the heart of everything we do, we want to make a positive impact in their lives as a trusted partner. As their needs and demands evolve, we continuously transform ourselves to adapt to meet these needs. We care about our customers, and to support them throughout their lives, we help them plan ahead to ensure that they are protected financially, while empowering them to lead an active and healthy life so that they can celebrate more moments of joy with their family.
  `,
  linkUrl: 'https://www.aia.com.sg/en/about-aia.html',
  linkTitle: 'Learn more →',
};

export default Introduction;
