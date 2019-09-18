import React from 'react';
import { Container, Section } from '../components/Layout';
import { Image } from '../components/Image';
import SEO from '../components/Seo';

const NotFoundPage = (props) => {
  console.log(props)
  return (
  <Container>
    <SEO title="404: Not found" />
    <Section className="flex-center" style={{ minHeight: '500px' }}>
      <div className="text-center">
        <Image
          filename="aia-logo.png"
          style={{ width: '100px', height: '100x', margin: 'auto' }}
        />
        <h2 className="margin-bottom-l margin-top-xl">PAGE NOT FOUND</h2>
        <p>You just hit a route that doesn&#39;t exist.</p>
        <p>{props.text}</p>
      </div>
    </Section>
  </Container>
)};

export default NotFoundPage;
