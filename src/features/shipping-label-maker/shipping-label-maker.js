import React from 'react';
import './shipping-label-maker.css';
import { Wizard, WizardStep } from 'core/components/wizard/wizard';

class ShippingLabelMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false
    };
  }
  render() {
    return (
      <Wizard
        className='TBD'
        header='Shipping Label Maker'
        wizardContext={{
          from: {
            name: 'John Smith',
            street: '131 Dartmouth St',
            city: 'Boston',
            state: 'MA',
            zip: '02116'
          },
          to: {
            name: 'Linda Jackson',
            street: '40 Fulton St',
            city: 'New York',
            state: 'NY',
            zip: '10038'
          },
          weight: 2,
          shippingOption: 1
          }}
        >
        <WizardStep className='TBD' header='First Step'>Content</WizardStep>
        <WizardStep className='TBD' header='Second Step'>Content</WizardStep>
        <WizardStep className='TBD' header='Third Step'>Content</WizardStep>
      </Wizard>
    );
  }
}

export default ShippingLabelMaker;
