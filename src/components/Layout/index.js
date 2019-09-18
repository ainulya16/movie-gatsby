import React from 'react';
import { string, arrayOf, any, bool, oneOfType, node } from 'prop-types';
import Helmet from 'react-helmet';
import { Layout as AntDLayout } from 'antd';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Container from './Container';
import Section from './Section';

const BaseLayout = styled(AntDLayout)`
  && {
    height: 100%;
    min-height: 100vh;
  }
`;
const Header = styled(AntDLayout.Header)`
  && {
    min-height: 80px;
    line-height: 80px;
    height: 80px;
    position: fixed;
    padding: 0;
    width: 100%;
    z-index: 999;
    a {
      display: inherit;
    }
    a,img {
      width: 42px;
      height: 42px;
    }

    @media (max-width: 768px) {
      nav {
        height: 54px;
        a,
        img {
          width: 34px;
          height: 34px;
        }
      }
      min-height: 54px;
      line-height: 54px;
      height: 54px;
    }

    @media only screen and (min-device-width : 768px) and (max-device-width : 1024px)  {
      nav {
        height: 54px;
        a,
        img {
          width: 34px;
          height: 34px;
        }
      }
      min-height: 54px;
      line-height: 54px;
      height: 54px;
    }
  }
`;


const Content = styled(AntDLayout.Content)`
  && {
    background: white;
    margin: '0 auto';
    padding-top: ${props => (props.hasnavbar ? '80px' : 0)};
    background: white;
    @media (max-width: 768px) {
      padding-top: ${props => (props.hasnavbar ? '54px' : 0)};
    }
  }
`;

const BaseFooter = styled(AntDLayout.Footer)`
  && {
    padding: 0;
  }
`;

// const pathFaq = '/PA100/faqs';

const Layout = ({ description, lang, meta, title, showNavbar, children }) => {
  const handleBack = () => {
    window.history.back();
  };
  const renderBackButton = () => {
    return (
      <BackIcon
        iconName="preview"
        shadow
        circle
        size="s"
        onClick={handleBack}
      />
    );
  };
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
              menuLinks {
                name
                link
              }
              pathWithBackButton
            }
          }
        }
      `}
      render={({ site }) => {
        const metaDescription = description || site.siteMetadata.description;
        const { pathWithBackButton } = site.siteMetadata;
        const childrenFooter = {
          // copyright : 'AIA ©2019 Created by AIA Teams',
          urlTermsOfUse : '/PA100/terms-of-use'
          }
        return (
          <React.Fragment>
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={title}
              titleTemplate={`%s | ${site.siteMetadata.title}`}
              meta={[
                {
                  name: 'description',
                  content: metaDescription,
                },
                {
                  property: 'og:title',
                  content: title,
                },
                {
                  property: 'og:description',
                  content: metaDescription,
                },
                {
                  property: 'og:type',
                  content: 'website',
                },
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
                {
                  name: 'twitter:creator',
                  content: site.siteMetadata.author,
                },
                {
                  name: 'twitter:title',
                  content: title,
                },
                {
                  name: 'twitter:description',
                  content: metaDescription,
                },
              ].concat(meta)}
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <BaseLayout>
              {showNavbar && (
                <Header>
                  {/* <Nav renderIconLeft={showBackButton && renderBackButton} /> */}
                </Header>
              )}
              <Content hasnavbar={showNavbar}>{children}</Content>
              {/* <BaseFooter>
              </BaseFooter> */}
            </BaseLayout>
          </React.Fragment>
        );
      }}
    />
  );
};

Layout.defaultProps = {
  description: null,
  lang: 'en',
  meta: [],
  title: '',
  showNavbar: true,
};

Layout.propTypes = {
  description: string,
  lang: string,
  meta: arrayOf(any),
  title: string,
  showNavbar: bool,
  children: oneOfType([node, arrayOf(node)]).isRequired,
};

export default Layout;

export { Container, Section };
