import React from 'react';
import './wizard.css';

class Wizard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      numberOfSteps: this.props.children.length
    }
  }

  nextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 })
  }

  prevStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 })
  }

  render() {
    const { className, header, wizardContext } = this.props;
    const { currentStep, numberOfSteps } = this.state;
    const firstStep = currentStep === 1;
    const lastStep = currentStep === numberOfSteps;

    return (
      <form className={className}>
        <header>
          {header && <h1>{header}</h1>}
          <div className="progress">
            <div className="progress__bar" style={{ width: `${(currentStep) / numberOfSteps * 100}%` }} />
          </div>
        </header>
        {this.props.children[currentStep - 1]}
        <footer>
          {!firstStep && <button type="button" onClick={this.prevStep}>Previous</button>}
          {!lastStep && <button type="button" onClick={this.nextStep}>Next</button>}

          {lastStep && <input type="submit" value="Submit" />}
        </footer>
      </form>
    );
  }
}

function WizardStep({ className, header, children }) {
  return (
    <section>
      <h2>{header}</h2>
      <div>{children}</div>
    </section>
  );
}

export { Wizard, WizardStep };
