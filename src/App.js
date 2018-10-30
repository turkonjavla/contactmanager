import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from './context';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <Provider>
        <div classNaame="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
