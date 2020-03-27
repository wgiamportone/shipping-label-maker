import React from 'react';
import PropTypes from 'prop-types';

class ShippingOptions extends React.Component {
  render() {
    const { wizardContext: { weight, shippingOption }, className } = this.props;

    const groundSelected = shippingOption === '1';
    const prioritySelected = shippingOption === '2';
    const shippingRate = 0.40;
    const groundCost = (weight * shippingRate * 1).toFixed(2);
    const priorityCost = (weight * shippingRate * 1.5).toFixed(2);

    return (
      <fieldset className={`${className} step`}>
        <legend className="step__heading">Add package weight and shipping option:</legend>
        <div className="step__group">
          <label className="step__group-inner">
            <span className="step__label">Package weight:</span>
            <input className="step__input" type="text" name="weight" onChange={this.props.handleChange} value={weight} />
          </label>
        </div>
        <span className="step__label">Shipping option:</span>
        <div className="step__group">
          <label className="step__group-inner radio-group">
            <input type="radio" name="shippingOption" value="1" onChange={this.props.handleChange} checked={groundSelected} />
            <span className="step__label step__label--inline">${groundCost} - Ground</span>
          </label>
          <label className="step__group-inner radio-group">
            <input type="radio" name="shippingOption" value="2" onChange={this.props.handleChange} checked={prioritySelected} />
            <span className="step__label step__label--inline">${priorityCost} - Priority</span>
          </label>
        </div>
      </fieldset>
    );
  }
}

ShippingOptions.propTypes = {
  wizardContext: PropTypes.object.isRequired
};

export default ShippingOptions;
