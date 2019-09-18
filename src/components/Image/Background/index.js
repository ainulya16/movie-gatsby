import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImageGatsby from 'gatsby-background-image';
import styled from 'styled-components';

const BackgroundImageComponent = props => {
  const { filename, alt, backgroundColor, children, ...attr } = props;

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 4160, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(filename);
        });
        if (!image) return null;
        const imageData = image.node.childImageSharp.fluid;
        return (
          <BackgroundImageGatsby
            alt={alt}
            fluid={imageData}
            backgroundColor={backgroundColor}
            {...attr}
          >
            {children}
          </BackgroundImageGatsby>
        );
      }}
    />
  );
};

BackgroundImageComponent.defaultProps = {
  filename: 'blazing.png',
  alt: 'logo',
  backgroundColor: '#FFF',
  children: null,
};

BackgroundImageComponent.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
const BackgroundImage = styled(BackgroundImageComponent)`
  width: 100%;
  height: 500px;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

BackgroundImage.displayName = 'BackgroundImage';

export default BackgroundImage;
