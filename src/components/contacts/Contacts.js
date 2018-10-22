import React, { Component } from 'react';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {
          value => {
            const { contacts } = value;
            return (
              <React.Fragment>
                {
                  contacts.map(contact => (
                    <div>
                      <h2>{ contact.name }</h2>
                      <h3>{ contact.email }</h3>
                      <h3>{ contact.phone }</h3>
                    </div>
                  ))
                }
              </React.Fragment>
            )
          }
        }
      </Consumer>
    )
  }
}

export default Contacts;