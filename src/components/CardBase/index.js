import React from 'react';
import { any, bool, func, arrayOf, string, number } from 'prop-types';
import styled, { css } from 'styled-components';
import { Accordion, Button } from '@aia-digital/ui-library';
import { theme } from '../../utils/constants';
import icDiamond from '../../assets/images/icDiamond.svg';
import icClassic from '../../assets/images/icClassic.svg';

const Container = styled.div`
  ${props =>
    props.isRecommended &&
    css`
      border: 3px solid ${theme.color.p1};
    `}
  font-family:'AIARegular';
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px 10px;
  max-width: 380px;
  margin: auto;
  padding-top: 12px;
  text-align: center;
  overflow: hidden;
  .padding-s {
    width: auto;
    display: inline-block;
    border-bottom: 1px solid #d31546;
    padding: 8px;
    margin-bottom: 7px;
  }
  @media (max-width: 1024px) {
    width: 315px;
  }
`;

const BorderedContainer = styled.div`
  border: 1px solid red;
`;
BorderedContainer.displayName = 'BorderedContainer';

const Title = styled.div`
  margin-top: 6px;
  margin-bottom: 20px;
  text-align: center;
  .iconPackage {
    display: inline-block;
    text-align: center;
    margin-bottom: 6.5px;
    img {
      width: 30px;
      height: 32.5px;
    }
  }
  .packageName {
    font-family: 'AIAMedium';
    font-size: 20px;
    color: #685556;
    line-height: 1;
    letter-spacing: normal;
  }
  .redText {
    color: #d31546;
  }
  @media(max-width: 768px) {
    margin-top: 8px;
    .iconPackage {
      img {
        width: 36px;
        height: 30px;
      }
    }
  }
`;
const TitleAmount = styled.div`
  text-align: center;
  font-family: 'AIAMedium';
  color: #685556;
  line-height: normal;
  letter-spacing: normal;
  .small1 {
    font-size: 15px;
    margin-bottom: 2px;
  }
  .small2 {
    font-size: 22px;
  }
`;
const Price = styled.div`
  font-family: 'AIAMedium';
  text-align: center;
  font-size: 15px;
  color: #685556;
  line-height: 1;
  letter-spacing: normal;
  .amount {
    font-family: AIACondensedMedium;
    font-size: 34px;
    margin-bottom: 5px;
  }
  .term {
    margin-top: -3x;
    margin-bottom: -3px;
    line-height: 1.07;
  }
`;

const AccordionWrapper = styled.div`
  text-align: left;
  margin-top: 20px;
  line-height: normal;
  letter-spacing: -0.45px;
  .faqText > div > div > div {
     position: relative;
     bottom: 2px;
     right: -5px;
  }
  .faqText > div > div > div i{
     color: #596c80;
     width: 10px;
     height: 16px;
  }
  .faqText > div > div {
    position: relative;
    left: -6px;
    margin-bottom: -8px;
    padding-right: 29px;
  }
  .faqText > div {
    padding: 10px 0px 0px 0px;
  }
  .faqText > div > div:nth-child(2) {
    padding-bottom: 15px;
  }
  .itemBenefit {
    font-family: AIARegular;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.45px;
    color: #685556;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 10px;
  button {
    width: 356px;
    height: 50px;
  }
  div:nth-child(1) {
    width: auto;
  }
  @media(max-width: 1024px){
    margin-top: 19.6px;
    button {
      width: 295px;
    }
  }
`;

const StyledButton = styled(Button)`
  margin: auto;
  padding-left: 50px;
  padding-right: 50px;
`;

const renderAccordion = benefits => {
  const dataFormat = benefits.map(item => {
    const icon = item.description ? { rotate: true, name: 'forward', size: 'm'} :  null;
    const title = (
      <div className="itemBenefit">
        <span style={{ fontWeight: 'bold' }}>
          S${new Intl.NumberFormat().format(item.value)}{' '}
        </span>
        <span>{item.name.en}</span>
      </div>
    );
    return ({ title, content: item.description ? item.description.en : null, icon});
  });
  return <Accordion className="faqText" data={dataFormat} />;
};

const Card = ({
  name,
  totalPremium,
  mode,
  benefits,
  onButtonClicked,
  showButton,
  titleButton,
  maximumInsured,
  ...attr
}) => {
  return (
    <Container {...attr}>
      <div className="padding-s">
        <Title>
          <div className="iconPackage">
            <img src={name === 'Diamond' ? icDiamond : icClassic} alt="" />
          </div>
          <div
            className={
              name === 'Diamond' ? 'packageName redText' : 'packageName'
            }
          >
            {name}
          </div>
        </Title>
        <Price>
          <div className="amount">S$ {new Intl.NumberFormat('en-SG', {minimumFractionDigits: 2}).format(totalPremium)}</div>
          <div className="term">{`${mode.toLowerCase()}`}</div>
        </Price>
      </div>
      <TitleAmount>
        <div className="small1">Maximum Insured amount</div>
        <div className="small2">
          S$ {new Intl.NumberFormat().format(maximumInsured)}
        </div>
      </TitleAmount>
      {benefits.length > 0 && (
        <AccordionWrapper>{renderAccordion(benefits)}</AccordionWrapper>
      )}
      {showButton && (
        <ButtonWrapper>
          <StyledButton gradient rounded onClick={onButtonClicked}>{titleButton}</StyledButton>
        </ButtonWrapper>
      )}
    </Container>
  );
};

Card.propTypes = {
  showButton: bool,
  onButtonClicked: func,
  name: string.isRequired,
  totalPremium: number.isRequired,
  maximumInsured: number.isRequired,
  mode: string.isRequired,
  benefits: arrayOf(any).isRequired,
  isRecommended: bool,
  titleButton: string,
};

Card.defaultProps = {
  showButton: true,
  onButtonClicked: () => {},
  isRecommended: false,
  titleButton: 'SELECT',
};

export default Card;
