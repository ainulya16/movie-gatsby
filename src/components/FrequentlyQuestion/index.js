import React from 'react';
import { any, func, objectOf } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Text, Accordion as AccordionBase } from '@aia-digital/ui-library';
import { getFAQs } from '../../redux/Home/action';
import { selectFAQs } from '../../redux/Home/selectors';

const Container = styled.div`
  h2 {
    text-align: left;
    font-family: 'AIACondensed';
    font-size: 22px;
    font-weight: bolder;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: 0.28px;
    color: #393d3e;
    @media (max-width: 800px) {
      padding-left: 20pt;
    }
  }
`;
const Accordion = styled(AccordionBase)`
  & {
    /* min-width: 450px; */
    @media (max-width: 768px) {
      min-width: unset;
      width: 100%;
    }
  }
  div > div:nth-child(0) {
    padding: 18px;
  }
  div > div {
    @media (max-width: 800px) {
      margin-left: 20pt;
    }
  }
  div > div > div {
    @media (max-width: 800px) {
      margin-left: 0;
    }
    width: 40px;
    min-width: 40px;
  }
  div > div > div > div > i {
    color: #685556;
    float: left;
    line-height: 36px;
  }
  div > div > div > div > .icon-forward {
    margin-left: -4px;
  }
  p {
    line-height: 2;
    margin-bottom: unset;
  }
`;
const Link = styled.a`
  & {
    color: #685556;
  }
`;

export class FrequentlyQuestion extends React.PureComponent {
  componentDidMount() {
    const { onGetData } = this.props;
    onGetData();
  }

  render() {
    const { faqData } = this.props;
    if (!faqData) {
      return null;
    }
    const { title, pdfs } = faqData;
    const accordionData = pdfs.map(item => {
      return {
        title: (
          <Link
            href={item.link}
            target={item.link === '/PA100/faqs' ? '_self' : '_blank'}
          >
            {item.title}
          </Link>
        ),
        icon: item.icon,
      };
    });
    return (
      <Container>
        <Text fontFamily="AIACondensed" level="h2">
          {title}
        </Text>
        <Accordion data={accordionData} />
      </Container>
    );
  }
}
FrequentlyQuestion.propTypes = {
  faqData: objectOf(any),
  onGetData: func.isRequired,
};
FrequentlyQuestion.defaultProps = {
  faqData: null,
};
export const mapStateToProps = createStructuredSelector({
  faqData: selectFAQs(),
});
export const mapDispatchToProps = {
  onGetData: getFAQs,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FrequentlyQuestion);
