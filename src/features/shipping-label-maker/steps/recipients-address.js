import React from 'react';
import PropTypes from 'prop-types';

class RecipientAddress extends React.Component {
  render() {
    const { wizardContext: { to } } = this.props;

    return (
      <fieldset>
        <p>
          <label>Name: <input type="text" name="name" data-object="true" data-step="to" value={to.name} onChange={this.props.handleChange} /></label>
        </p>
        <p>
          <label>Street: <input type="text" name="street" data-object="true" data-step="to" value={to.street} onChange={this.props.handleChange} /></label>
        </p>
        <p>
          <label>City: <input type="text" name="city" data-object="true" data-step="to" value={to.city} onChange={this.props.handleChange} /></label>
          <label>State: <input type="text" name="state" data-object="true" data-step="to" value={to.state} onChange={this.props.handleChange} /></label>
          <label>Zip: <input type="text" name="zip" data-object="true" data-step="to" value={to.zip} onChange={this.props.handleChange} /></label>
        </p>
      </fieldset>
    );
  }
}

RecipientAddress.propTypes = {
  wizardContext: PropTypes.object.isRequired
};

export default RecipientAddress;
