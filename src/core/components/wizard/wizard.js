import React from 'react';
import PropTypes from 'prop-types';
import './wizard.css';

class Wizard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 0,
      numberOfSteps: this.props.steps.length
    }
  }

  nextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 })
  }

  prevStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 })
  }

  render() {
    const { header, steps, wizardContext } = this.props;
    const { currentStep, numberOfSteps } = this.state;

    const firstStep = currentStep === 0;
    const lastStep = currentStep === numberOfSteps;

    const Step = steps[currentStep];

    return (
      <form>
        <header>
          {header && <h1>{header}</h1>}
          <div className="progress">
            <div className="progress__bar" style={{ width: `${(currentStep + 1) / numberOfSteps * 100}%` }} />
          </div>
        </header>
        <Step wizardContext={wizardContext} handleChange={this.props.handleChange} />
        <footer>
          {!firstStep && <button type="button" onClick={this.prevStep}>Previous</button>}
          {!lastStep && <button type="button" onClick={this.nextStep}>Next</button>}
          {lastStep && <input type="submit" value="Submit" />}
        </footer>
      </form>
    );
  }
}

Wizard.propTypes = {
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired
};

export default Wizard;
