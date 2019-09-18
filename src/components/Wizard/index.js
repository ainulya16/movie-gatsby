/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { string, arrayOf, element, func, shape, bool } from 'prop-types';
import { ProcessBar } from '@aia-digital/ui-library';

const ProcessBarCustom = styled(ProcessBar)`
  /* div > div:nth-child(0) { text-align: center; } */
  width: 80%;
  margin-top: 34px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.saveStepState = this.saveStepState.bind(this);
    this.getStepState = this.getStepState.bind(this);
    this.finishWizard = this.finishWizard.bind(this);
    this.state = {
      currentStep: 0,
      stepList: [],
      savedStepData: [],
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    const componentsProps = {
      nextFn: this.next,
      prevFn: this.previous,
      saveState: this.saveStepState,
      getState: this.getStepState,
    };
    const stepList = steps.map(step => {
      return React.cloneElement(step.component, componentsProps);
    });
    this.setState({ stepList });
  }

  getStepState() {
    return this.state.savedStepData;
  }

  previous(length = 1) {
    const { currentStep } = this.state;
    if (currentStep - length >= 0) {
      this.setState({ currentStep: currentStep - length });
    }
  }

  saveStepState(stepNum, stateData) {
    const { savedStepData } = this.state;
    const newSavedStepData = savedStepData;
    newSavedStepData[stepNum] = stateData;
    this.setState({ savedStepData: newSavedStepData });
  }

  finishWizard() {
    this.props.onFinish(this.state.savedStepData);
  }

  next(length = 1) {
    const { currentStep } = this.state;
    const { steps } = this.props;
    if (currentStep + length < this.props.steps.length) {
      this.setState({ currentStep: currentStep + length });
    } else if (currentStep + length === steps.length) {
      this.finishWizard();
    }
  }

  render() {
    const { currentStep, stepList } = this.state;
    const { steps, showProgress } = this.props;
    return (
      <div className="text-center">
        {showProgress && currentStep < 2 && (
          <ProcessBarCustom
            status
            percent={((currentStep + 1) / (steps.length)) * 100}
          />
        )}
        {stepList[currentStep]}
      </div>
    );
  }
}

const stepItemProp = shape({
  title: string,
  description: string,
  component: element,
});

Wizard.propTypes = {
  steps: arrayOf(stepItemProp).isRequired,
  onFinish: func.isRequired,
  showProgress: bool,
};

Wizard.defaultProps = {
  showProgress: true,
};
