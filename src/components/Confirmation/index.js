/* eslint-disable import/no-unresolved */
import React, { memo, useState, useEffect } from 'react';
import { objectOf, any, string, func } from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import { Text, ButtonGroup } from '@aia-digital/ui-library';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  setVarInSentence,
} from '../../helpers/helper_functions';
import { selectFormData } from '../../redux/Form/selectors';
import dynamicAction from '../../dynamicForm/dynamicAction';
import { getCustomerDataLoaded } from '../../redux/Customer/action';

const Wrapper = styled.div`
  .cspuYg {
    width: 160px;
    display: inline-block;
  }
  margin-top: 60px;

  .Stroke {
    width: 90px;
    height: 1px;
    border: solid 0.5px #d31546;
    margin: auto;
    margin-bottom: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: inline-flex;
`;

/**
 * Phone confirmation component
 *
 * example usage:
 * <PhoneConfirmation
 *    steps={steps}
 *    phoneNumber="+62890992392"
 *    handleYesButton={() => console.log('clicked yes button')}
 *    handleNoButton={() => console.log('clicked no button')}
 * />
 *
 * example steps props:
 * const steps = {
 *   name: 'confirmationPhone',
 *   type: 'confirmation',
 *   customize: {
 *     label: 'Is your mobile phone number {{$phone}}',
 *   },
 * };
 *
 */
const Confirmation = memo(props => {
  const {
    customize,
    name,
    onSetCustomerData,
    FromData,
    clicknext,
  } = props;
  const form = FromData.toJS();
  const { preaction, action } = customize;
  const [meta, setMeta] = useState({});
  useEffect(() => {
    if (!_.isEmpty(preaction) && !_.isEmpty(form.application.values) && _.isEmpty(meta)) {
      dynamicAction(preaction, form.application.values).then(res => {
        setMeta(res.meta);
      });
    }
  }, [preaction, meta, form.application.values]);
  const { label } = customize;
  let fixLabel = '';
  if (name === 'confirmationPhone') {
    const labelWithDefinedVar = setVarInSentence(
      label,
      'phone',
      (!_.isEmpty(meta)) ? meta.phoneNumber : '+65',
    );
    fixLabel = `${labelWithDefinedVar} ?`;
  }

  const handleYesButton = () => {
    dynamicAction(action, form.application.values).then(res => {
      onSetCustomerData(res);
      clicknext();
    });
  };
  const handleNoButton = () => {
    clicknext(2)
  };
  return (
    <Wrapper>
      <div className="Stroke" />
      <Text fontFamily='AIAMedium'>{fixLabel}</Text>
      <ContentWrapper>
        <ButtonGroup
          buttons={[{text: 'Yes',value: 'y', onClick: handleYesButton},{text: 'No',value: 'n', onClick: handleNoButton}]}
          rounded
          radius="20px"
          space={10}
          disableAfterClick
          buttonWidth={150}
        />
      </ContentWrapper>
    </Wrapper>
  );
});

Confirmation.propTypes = {
  customize: objectOf(any).isRequired,
  onSetCustomerData: func.isRequired,
  FromData: objectOf(any).isRequired,
  clicknext: func.isRequired,
  name: string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  FromData: selectFormData(),
});

const mapDispatchToProps = {
  onSetCustomerData: getCustomerDataLoaded,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Confirmation);
