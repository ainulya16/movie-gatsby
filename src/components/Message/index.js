import React, { memo } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { TextResponsive } from '@aia-digital/ui-library';

const Wrapper = styled.div`
  text-align: center;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 500px;
  margin: auto;
`;

const Message = memo(({ content }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextResponsive>{content}</TextResponsive>
      </ContentWrapper>
    </Wrapper>
  );
});

Message.propTypes = {
  content: string,
};

Message.defaultProps = {
  content: '',
};

export default Message;
