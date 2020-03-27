import React from 'react';
import PropTypes from 'prop-types';

class RecipientAddress extends React.Component {
  render() {
    const { wizardContext: { to }, className } = this.props;

    return (
      <fieldset className={`${className} step`}>
        <legend className="step__heading">Enter the recipient's address:</legend>
        <div className="step__group">
          <label className="step__group-inner">
            <span className="step__label">Name:</span>
            <input className="step__input" type="text" name="name" data-object="true" data-step="to" value={to.name} onChange={this.props.handleChange} />
          </label>
        </div>
        <div className="step__group">
          <label className="step__group-inner">
            <span className="step__label">Street:</span>
            <input className="step__input" type="text" name="street" data-object="true" data-step="to" value={to.street} onChange={this.props.handleChange} />
          </label>
        </div>
        <div className="step__group">
          <label className="step__group-inner">
            <span className="step__label">City:</span>
            <input className="step__input" type="text" name="city" data-object="true" data-step="to" value={to.city} onChange={this.props.handleChange} />
          </label>
          <label className="step__group-inner step__group-inner--col-3">
            <span className="step__label">State:</span>
            <input className="step__input" type="text" name="state" data-object="true" data-step="to" value={to.state} onChange={this.props.handleChange} />
          </label>
          <label className="step__group-inner step__group-inner--col-3">
            <span className="step__label">Zip:</span>
            <input className="step__input" type="text" name="zip" data-object="true" data-step="to" value={to.zip} onChange={this.props.handleChange} />
          </label>
        </div>
      </fieldset>
    );
  }
}

RecipientAddress.propTypes = {
  wizardContext: PropTypes.object.isRequired
};

export default RecipientAddress;
