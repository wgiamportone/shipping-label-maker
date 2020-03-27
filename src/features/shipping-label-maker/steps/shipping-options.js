import React from 'react';

class ShippingOptions extends React.Component {
  render() {
    const { wizardContext: { weight, shippingOption } } = this.props;

    return (
      <fieldset>
        <p>
          <label>Package weight: <input type="text" name="weight" onChange={this.props.handleChange} value={weight} /></label>
        </p>
        <p>
          Shipping option:
          <label>
            <input type="radio" name="shippingOption" value="1" onChange={this.props.handleChange} />
            <span>$0.00 - Ground</span>
          </label>
          <label>
            <input type="radio" name="shippingOption" value="2" onChange={this.props.handleChange} />
            <span>$0.00 - Priority</span>
          </label>
        </p>
      </fieldset>
    );
  }
}

export default ShippingOptions;
