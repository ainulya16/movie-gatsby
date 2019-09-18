import React from 'react';
import { string, arrayOf, any, bool, oneOfType, node } from 'prop-types';
import Helmet from 'react-helmet';
import { Layout as AntDLayout } from 'antd';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Container from './Container';
import Section from './Section';
import Navbar from './Navbar';

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
    background: rgba(255,255,255,0.5);
    a {
      display: inherit;
    }
  }
`;


const Content = styled(AntDLayout.Content)`
  && {
    background: white;
    margin: '0 auto';
    /* padding-top: ${props => (props.hasnavbar ? '80px' : 0)}; */
    background: white;
    /* @media (max-width: 768px) {
      padding-top: ${props => (props.hasnavbar ? '54px' : 0)};
    } */
  }
`;

const BaseFooter = styled(AntDLayout.Footer)`
  && {
    padding: 0;
  }
`;

// const pathFaq = '/PA100/faqs';

const Layout = ({ description, lang, meta, title, showNavbar, children }) => {
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
                  <Navbar menuLinks={site.siteMetadata.menuLinks} />
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
