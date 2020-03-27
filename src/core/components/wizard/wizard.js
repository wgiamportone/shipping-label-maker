import React from 'react';
import PropTypes from 'prop-types';
import './wizard.css';

class Wizard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 0,
      numberOfSteps: this.props.steps.length
    };
  }

  nextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 })
  }

  prevStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 })
  }

  complete = (event) => {
    event.preventDefault()
    const { onComplete, wizardContext } = this.props;
    onComplete(wizardContext);
  }

  render() {
    const { header, steps, wizardContext } = this.props;
    const { currentStep, numberOfSteps } = this.state;

    const firstStep = currentStep === 0;
    const lastStep = currentStep === (numberOfSteps - 1);
    const Step = steps[currentStep];

    return (
      <form className="wizard">
        <header className="wizard__header">
          <h1>{header}</h1>
          <div className="progress-bar">
            <div className="progress-bar__fill" style={{ width: `${(currentStep + 1) / numberOfSteps * 100}%` }} />
          </div>
        </header>
        <Step className="wizard__step" wizardContext={wizardContext} handleChange={this.props.handleChange} />
        <footer className="wizard__footer">
          {!firstStep && <button className="btn btn--text" type="button" onClick={this.prevStep}>Previous</button>}
          {!lastStep && <button className="btn btn--primary" type="button" onClick={this.nextStep}>Next</button>}
          {lastStep && <button className="btn btn--primary" type="submit" onClick={this.complete}>Submit</button>}
        </footer>
      </form>
    );
  }
}

Wizard.propTypes = {
  header: PropTypes.string.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default Wizard;
