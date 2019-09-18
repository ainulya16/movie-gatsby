import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

const Image = props => {
  const { filename, alt, ...attr } = props;
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
                  sizes(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpSizes
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
        const imageSizes = image.node.childImageSharp.sizes;
        return (
          <Img
            alt={alt}
            sizes={imageSizes}
            objectFit="cover"
            objectPosition="50% 50%"
            {...attr}
          />
        );
      }}
    />
  );
};

Image.defaultProps = {
  filename: 'aia-logo.png',
  alt: 'logo',
};

Image.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
