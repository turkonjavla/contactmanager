import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo: true
  };

  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    })
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {
          value => {
            const { dispatch } = value;
            return (
              <div className="card card-body mb-3">
                <h4>
                  { name }
                  <i 
                    className="fas fa-sort-down ml-2"
                    style={{cursor: 'pointer'}}
                    onClick={ this.onShowClick }>
                  </i>
                  <i 
                    className="fas fa-times"
                    style={{color: '#f44336', cursor: 'pointer', float: 'right'}}
                    onClick={ this.onDeleteClick.bind(this, id, dispatch) }>
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
      </Consumer>
    )
  }
}

export default Contact;