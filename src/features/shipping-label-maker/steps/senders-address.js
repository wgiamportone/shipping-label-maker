import React from 'react';
import PropTypes from 'prop-types';

class SendersAddress extends React.Component {
  render() {
    const { wizardContext: { from } } = this.props;

    return (
      <fieldset>
        <p>
          <label>Name: <input type="text" name="name" data-object="true" data-step="from" value={from.name} onChange={this.props.handleChange} /></label>
        </p>
        <p>
          <label>Street: <input type="text" name="street" data-object="true" data-step="from" value={from.street} onChange={this.props.handleChange} /></label>
        </p>
        <p>
          <label>City: <input type="text" name="city" data-object="true" data-step="from" value={from.city} onChange={this.props.handleChange} /></label>
          <label>State: <input type="text" name="state" data-object="true" data-step="from" value={from.state} onChange={this.props.handleChange} /></label>
          <label>Zip: <input type="text" name="zip" data-object="true" data-step="from" value={from.zip} onChange={this.props.handleChange} /></label>
        </p>
      </fieldset>
    );
  }
}

SendersAddress.propTypes = {
  wizardContext: PropTypes.object.isRequired
};

export default SendersAddress;
