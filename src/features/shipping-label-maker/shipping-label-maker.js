import React from 'react';
import './shipping-label-maker.css';

import Wizard from 'core/components/wizard/wizard';
import SendersAddress from 'features/shipping-label-maker/steps/senders-address';
import RecipientAddress from 'features/shipping-label-maker/steps/recipients-address';
import ShippingOptions from 'features/shipping-label-maker/steps/shipping-options';
import ShippingConfirmation from 'features/shipping-label-maker/steps/shipping-confirmation';


class ShippingLabelMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wizardContext: {
        from: {
          name: '',
          street: '',
          city: '',
          state: '',
          zip: ''
        },
        to: {
          name: '',
          street: '',
          city: '',
          state: '',
          zip: ''
        },
        weight: '',
        shippingOption: ''
      }
    };
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.getAttribute('name');
    const isObject = event.target.getAttribute('data-object');
    const objectName = event.target.getAttribute('data-step');

    if(isObject) {
      this.setState(state => ({
        ...state, wizardContext: {
          ...state.wizardContext, [objectName]: {...state.wizardContext[objectName], [name]: value}
        }
      }));
    } else {
      this.setState({
        wizardContext: { ...this.state.wizardContext, [name]: value }
      });
    }
  }

  render() {
    const { wizardContext } = this.state;

    const steps = [SendersAddress, RecipientAddress, ShippingOptions, ShippingConfirmation];

    return (
      <Wizard
        header="Shipping Label Maker"
        wizardContext={wizardContext}
        handleChange={this.handleChange}
        steps={steps}
      />
    );
  }
}

export default ShippingLabelMaker;
