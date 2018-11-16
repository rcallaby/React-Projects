import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
            <li>{email} </li>
            <li>{phone}</li>
        </ul>
        
      </div>
    )
  }
}

Contacts.PropTypes ={
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired

}

export default Contacts;