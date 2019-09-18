import React from 'react';
import { Button as ButtonDef, ButtonIcon } from '@aia-digital/ui-library';
import styled from 'styled-components';
import _ from 'lodash';
import { navigate } from '@reach/router';
import { Map, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { objectOf, any, string, instanceOf, func } from 'prop-types';
import API from '../../services/api';
import buildAPICALL from '../../helpers/buildCallAPI';
import { setOrderData } from '../../redux/Domain/action';
import { selectFormValues } from '../../redux/Form/selectors';
import selectDomain from '../../redux/Domain/selectors';

const CustomBodyList = {
  ORDERDATA: 'ORDERDATA',
};

const CustomCallbackList = {
  SETORDERDATA: 'SETORDERDATA',
};

const ButtonStyled = styled(ButtonDef)`
  width: ${({ theme }) => theme.color.w9};
  /* font: ${({ theme }) => theme.color.f9}; */
  font-size: 16px;
  border-radius: 4px;
  height: 50px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
ButtonStyled.displayName = 'ButtonStyled';

const Button = ({
  label,
  customize,
  formdata,
  clicknext,
  clickprev,
  domainData,
  formReducerData,
  onSetOrderData,
}) => {
  const { action, componentProps, componentStyles } = customize;
  const domainValue = domainData.toJS();
  const formReducerDataValue = formReducerData.toJS();
  formdata = formdata ? formdata.toJS() : {};
  const source = {
    form: {
      ...formdata,
    },
  };

  const defaultActionFn = () => {};

  const oneMapCallBack = (response, target, callBack) => {
    const result = response.results[0] ? response.results[0] : {};
    if (result && !_.isEmpty(result)) {
      for (let index = 0; index < target.length; index++) {
        const element = target[index];
        callBack('application', element.field, result[element.source]);
      }
    }
  };

  const actionApiCall = () => {
    const callBackSource = [
      {
        service: 'https://developers.onemap.sg',
        fn: oneMapCallBack,
      },
    ];
    const callBack = action.fn;
    buildAPICALL(
      action.service,
      action.api,
      action.method || 'get',
      action.body || {},
      source || {},
    ).then(res => {
      const service = _.find(callBackSource, x => x.service === action.service);
      service.fn(res, action.customize.target, callBack);
    });
  };

  const bodyResolver = body => {
    const { ORDERDATA } = CustomBodyList;
    const orderData = {
      ...domainValue,
      application: _.get(formReducerDataValue, 'values', {}),
    };

    if (body.type === 'custom') {
      // for custom body
      switch (body.value) {
        case ORDERDATA:
          return orderData;

        default:
          return body.value;
      }
    }
    return body.value ? body.value : body;
  };

  const apiCall = async () => {
    const { path, url, method, body, endpoint } = action;
    const { SETORDERDATA } = CustomCallbackList;
    if (!path || !url || !method || !body || !endpoint) {
      console.log('Request is not valid');
    }
    const api = new API(endpoint);
    clicknext()
      .then(async () => {
        if (method === 'post') {
          const data = { path, method, url, body: bodyResolver(body) };
          try {
            const res = await api.post(data);
            const onSetOrderDataCB = _.find(
              action.customize.callback,
              cb => cb === SETORDERDATA,
            );
            // const onSetDomainDataCB = _.find(action.customize.callback, cb => cb === "onSetDomainData");
            if (!_.isEmpty(onSetOrderDataCB)) {
              onSetOrderData(res.data.orderReference);
            }
            return res;
          } catch (error) {
            console.log('Error', error);
            return error;
          }
        }
      })
      .catch(err => {
        console.log('Error', err);
        return err;
      });
  };

  const backFn = () => {
    const { url } = action;
    if (url) navigate(url);
    clickprev();
  };

  const sourceFn = [
    {
      name: 'populate',
      fn: actionApiCall,
    },
    {
      name: 'clicknext',
      fn: clicknext,
    },
    {
      name: 'clickprevious',
      fn: backFn,
    },
    {
      name: 'apiCall',
      fn: apiCall,
    },
  ];

  const actionFn = () => {
    const btnAction = !_.isEmpty(action)
      ? _.find(sourceFn, x => x.name === action.name)
      : { fn: defaultActionFn };
    btnAction.fn();
  };

  // if (customize.action && customize.action.type === 'api') {
  //   actionFn = actionApiCall;
  // } else {
  //   actionFn = defaultActionFn;
  // }

  // if (fieldValue.type && fieldValue.type === 'static') {
  //   radioValue = fieldValue.values;
  // }
  return customize.type && customize.type === 'icon' ? (
    <ButtonIcon onClick={actionFn} iconName={label} circle size="m" shadow />
  ) : (
    <ButtonStyled
      style={componentStyles}
      onClick={actionFn}
      {...componentProps}
    >
      {label}
    </ButtonStyled>
  );
};

Button.propTypes = {
  label: string,
  customize: objectOf(any).isRequired,
  domainData: instanceOf(Map),
  formReducerData: instanceOf(Map),
  formdata: instanceOf(Map),
  onSetOrderData: func,
  clicknext: func,
  clickprev: func,
};

Button.defaultProps = {
  label: 'Ok',
  domainData: fromJS({}),
  formReducerData: fromJS({}),
  formdata: fromJS({}),
  onSetOrderData: () => {},
  clicknext: () => {},
  clickprev: () => {},
};

export const mapStateToProps = createStructuredSelector({
  formReducerData: selectFormValues('application'),
  domainData: selectDomain(),
});

const mapDispatchToProps = {
  onSetOrderData: setOrderData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);
