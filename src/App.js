import React, { Component } from 'react';
import './styles/App.css';
import BeltListContainer from './containers/belt_list_container';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <BeltListContainer />
      </div>
    );
  }
}

export default App;
