import React from 'react';
import styled from 'styled-components';
import { bool, node } from 'prop-types';

const DefaultWrapper = styled.div`
  margin: 5px 0px;
`;

const ResponsiveTitleText = styled.h1`
  font-size: 42pt;

  /* Extra small devices (phones, less than 768px) */
  @media (max-width: 768px) {
    font-size: 18pt;
  }
  /* Small devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 22pt;
  }
  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 32pt;
  }
  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    font-size: 42pt;
  }
`;

const ResponsiveContentText = styled.span`
  font-size: 12pt;

  /* Extra small devices (phones, less than 768px) */
  @media (max-width: 768px) {
    font-size: 12pt;
  }
  /* Small devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 12pt;
  }
  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 14pt;
  }
  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    font-size: 14pt;
  }
`;

/**
 * Title components.
 * Use for every title.
 *
 * @param { Object } props
 */
const TextResponsive = ({ children, isTitle }) => {
  // eslint-disable-next-line max-len
  const TextComponent = isTitle ? (
    <ResponsiveTitleText>{children}</ResponsiveTitleText>
  ) : (
    <ResponsiveContentText>{children}</ResponsiveContentText>
  );

  return <DefaultWrapper>{TextComponent}</DefaultWrapper>;
};

TextResponsive.propTypes = {
  children: node.isRequired,
  isTitle: bool,
};

TextResponsive.defaultProps = {
  isTitle: false,
};

export default TextResponsive;
