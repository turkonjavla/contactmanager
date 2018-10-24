import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          { name }
          <i 
            className="fas fa-sort-down ml-2"
            style={{cursor: 'pointer'}}
            onClick={ this.onShowClick }>
          </i>
        </h4>
        { 
          showContactInfo ?
          <ul className="list-group">
            <li className="list-group-item">{ email }</li>
            <li className="list-group-item">{ phone }</li>
          </ul> : null
        }
      </div>
    )
  }
}

export default Contact;