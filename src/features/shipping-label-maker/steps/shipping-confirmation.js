import React from 'react';
import PropTypes from 'prop-types';

class ShippingConfirmation extends React.Component {
  render() {
    const { wizardContext: { from, to, weight, shippingOption }, className } = this.props;

    const shippingRate = 0.40;
    const shippingCost = (weight * shippingRate * (shippingOption === '1' ? 1 : 1.5)).toFixed(2);

    return (
      <section className={`${className} step`}>
        <h2 className="step__heading">Review and confirm:</h2>
        <div className="step__group">
          <section className="step__group-inner step__group-inner--col-2">
            <h3 className="step__sub-heading">Sender's address</h3>
            <p>{from.name}<br />{from.street}<br />{from.city}, {from.state} {from.zip}</p>
          </section>
          <section className="step__group-inner step__group-inner--col-2">
            <h3 className="step__sub-heading">Recipient's address</h3>
            <p>{to.name}<br />{to.street}<br />{to.city}, {to.state} {to.zip}</p>
          </section>
        </div>
        <section>
          <h3 className="step__sub-heading">Shipping details</h3>
          <p>Package weight: {weight ? weight : 'No weight specified.'}</p>
          <p>${shippingCost} - {shippingOptionText(shippingOption)}</p>
        </section>
      </section>
    );
  }
}

function shippingOptionText(shippingOption) {
  if(shippingOption === '1') return 'Ground';
  else if (shippingOption === '2') return 'Priority';
  else return 'No shipping selected.';
}

ShippingConfirmation.propTypes = {
  wizardContext: PropTypes.object.isRequired
};

export default ShippingConfirmation;
