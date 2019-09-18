import React from 'react';
import { Row, Col } from 'antd';
import { Button, StickyContainer } from '@aia-digital/ui-library';

const QuickSection = props => (
  <StickyContainer style={{ position: 'fixed', width: '100vw' }} {...props}>
    <Row>
      <Col xs={6} sm={6}>
        <Button color="primary">Cart</Button>
      </Col>
      <Col xs={6} sm={6}>
        <Button color="primary">Share</Button>
      </Col>
      <Col xs={6} sm={6}>
        <Button color="primary">Chat</Button>
      </Col>
      <Col xs={6} sm={6}>
        <Button color="primary">Advisor</Button>
      </Col>
    </Row>
  </StickyContainer>
);

export default QuickSection;
