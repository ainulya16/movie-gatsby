/* eslint-disable react/no-array-index-key */
import React, { memo } from 'react';
import { Row, Col } from 'antd';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import { any, arrayOf, string } from 'prop-types';
import { Icon } from '@aia-digital/ui-library';
import { capitalizeFirst } from '../../helpers/helper_functions';

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: #424242;
  margin-bottom: 9px;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #797979;
`;

const Value = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #797979;
  word-wrap: break;
  overflow-wrap: break-word;
  @media (max-width: 480px) {
    text-align: right;
  }
`;

/**
 * filtered special value for string
 *
 * @param {String} value
 */
const filteredValue = value => {
  if (typeof value === 'string') {
    switch (value) {
      case 'myself':
        return capitalizeFirst(value);
      case 'spouse':
        return capitalizeFirst(value);

      default:
        return value;
    }
  }
  return value;
};

/**
 * Simple DataFields
 * Props
 * Title: string
 * contentData: arrayOf(Object)
 * ex: contentData = [{ label: 'label', value: 'value' }]
 * gadani
 *
 */
const DataFields = memo(({ title, icon, iconUrl, contentData, ...attr }) => (
  <div {...attr}>
    {title && (
      <Title>
        {icon && <Icon name={icon} onClick={() => navigate(iconUrl)} />}
        <span style={icon && { marginLeft: '4px' }}> {title} </span>
      </Title>
    )}
    {contentData.map((content, i) => {
      const { label, value } = content;
      return (
        <Row key={i}>
          <Col md={{ span: 10 }} xs={12}>
            <Label>
              <p>{label}</p>
            </Label>
          </Col>
          <Col md={{ span: 14 }} xs={12}>
            <Value>
              <p>{filteredValue(value)}</p>
            </Value>
          </Col>
        </Row>
      );
    })}
  </div>
));

DataFields.propTypes = {
  title: string,
  icon: string,
  iconUrl: string,
  contentData: arrayOf(any),
};

DataFields.defaultProps = {
  title: '',
  contentData: [{}],
  icon: null,
  iconUrl: null,
};

export default DataFields;
