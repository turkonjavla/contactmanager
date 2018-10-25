import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Kelly',
        email: 'john@gmail.com',
        phone: '424-556-5655'
      },
      {
        id: 2,
        name: 'Anna Adams',
        email: 'anna@gmail.com',
        phone: '222-113-5745'
      },
      {
        id: 3,
        name: 'Lisa Berry',
        email: 'lisa@gmail.com',
        phone: '111-444-2242'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;