import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  h2 {
    /* font-family: 'AIABody'; */
    font-size: calc(18px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px) / (1600 - 300)));
    text-transform: uppercase;
    text-align: center;
    font-weight: bolder;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
`;

const Section = props => {
  const { title, titleClassName, titleStyle, children, ...attr } = props;
  return (
    <SectionWrapper {...attr}>
      {title && (
        <h2 className={`margin-bottom-m ${titleClassName}`} style={titleStyle}>
          {title}
        </h2>
      )}
      {children}
    </SectionWrapper>
  );
};

Section.defaultProps = {
  title: null,
  titleClassName: null,
  titleStyle: null,
  children: null,
};

Section.propTypes = {
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  titleStyle: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Section;
