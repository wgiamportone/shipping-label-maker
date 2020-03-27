import React from 'react';
import PropTypes from 'prop-types';

class SendersAddress extends React.Component {
  render() {
    const { wizardContext: { from }, className } = this.props;

    return (
      <fieldset className={`${className} step`}>
        <legend className="step__heading">Enter the sender's address:</legend>
        <div className="step__group">
          <label className="step__group-inner">
            <span className="step__label">Name:</span>
            <input className="step__input" type="text" name="name" data-object="true" data-step="from" value={from.name} onChange={this.props.handleChange} />
          </label>
        </div>
        <div className="step__group">
          <label className="step__group-inner">
            <span className="step__label">Street:</span>
            <input className="step__input" type="text" name="street" data-object="true" data-step="from" value={from.street} onChange={this.props.handleChange} />
          </label>
        </div>
        <div className="step__group">
          <label className="step__group-inner">
            <span className="step__label">City:</span>
            <input className="step__input" type="text" name="city" data-object="true" data-step="from" value={from.city} onChange={this.props.handleChange} />
          </label>
          <label className="step__group-inner step__group-inner--col-3">
            <span className="step__label">State:</span>
            <input className="step__input" type="text" name="state" data-object="true" data-step="from" value={from.state} onChange={this.props.handleChange} />
          </label>
          <label className="step__group-inner step__group-inner--col-3">
            <span className="step__label">Zip:</span>
            <input className="step__input" type="text" name="zip" data-object="true" data-step="from" value={from.zip} onChange={this.props.handleChange} />
          </label>
        </div>
      </fieldset>
    );
  }
}

SendersAddress.propTypes = {
  wizardContext: PropTypes.object.isRequired
};

export default SendersAddress;
