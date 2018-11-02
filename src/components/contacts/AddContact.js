import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({
      type: 'ADD_CONTACT',
      payload: newContact
    });

    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {
          value => {
            const { dispatch } = value;
            return (
              <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-header">Add Contact</div>
                  <div className="card-body">
                    <form onSubmit={ this.onSubmit.bind(this, dispatch) }>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          className="form-control form-control-sm" 
                          placeholder="Enter name"
                          value={ name }
                          onChange={ this.onChange }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          className="form-control form-control-sm" 
                          placeholder="Enter email"
                          value={ email }
                          onChange={ this.onChange }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                          type="text" 
                          name="phone"
                          className="form-control form-control-sm" 
                          placeholder="Enter phone"
                          value={ phone }
                          onChange={ this.onChange }
                        />
                      </div>
                      <input type="submit" className="btn btn-outline-dark btn-block" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default AddContact;