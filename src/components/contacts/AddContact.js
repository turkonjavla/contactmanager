import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };
  
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    /* ERROR CHECK */

    // name
    if(name === '') {
      this.setState({
        errors: {
          name: 'Name is required'
        }
      });
      return;
    }

    // email
    if(email === '') {
      this.setState({
        errors: {
          email: 'Email is required'
        }
      });
      return;
    }

    // phone
    if(phone === '') {
      this.setState({
        errors: {
          phone: 'Phone is required'
        }
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    axios
      .post('https://jsonplaceholder.typicode.com/users', newContact)
      .then(res => {
        dispatch({
          type: 'ADD_CONTACT',
          payload: res.data
        });
      });

    // clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;
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
                      <TextInputGroup 
                        label="Name"
                        name="name"
                        placeholder="Enter name"
                        value={ name }
                        onChange={ this.onChange }
                        error={ errors.name }
                      />
                      <TextInputGroup 
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={ email }
                        onChange={ this.onChange }
                        error={ errors.email }
                      />
                      <TextInputGroup 
                        label="Phone"
                        name="phone"
                        placeholder="Enter phone"
                        value={ phone }
                        onChange={ this.onChange }
                        error={ errors.phone }
                      />
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