import React from 'react';

class ShippingConfirmation extends React.Component {
  render() {
    const { wizardContext } = this.props;

    return (
      <div>
        <h3>Sender's address:</h3>
        <p>{wizardContext.from.name}</p>
        <p>{wizardContext.from.street}</p>
        <p>{wizardContext.from.city}, {wizardContext.from.state} {wizardContext.from.zip}</p>
        <h3>Recipient's address:</h3>
        <p>{wizardContext.to.name}</p>
        <p>{wizardContext.to.street}</p>
        <p>{wizardContext.to.city}, {wizardContext.to.state} {wizardContext.to.zip}</p>
        <h3>Shipping details:</h3>
        <p>Package weight {wizardContext.weight}</p>
        <p>$0.00 {wizardContext.shippingOption === 1 ? 'Ground' : 'Priority'}</p>
      </div>
    );
  }
}

export default ShippingConfirmation;
