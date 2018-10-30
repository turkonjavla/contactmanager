import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Context API
import { Provider } from './context';

// Components
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div classNaame="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ Contacts } />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
