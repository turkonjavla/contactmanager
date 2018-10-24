import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from './context';
import Contacts from './components/contacts/Contacts';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h2>Hello world</h2>
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
