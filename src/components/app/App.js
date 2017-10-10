import React, { Component } from 'react';
import './App.css';
import Header from "../header/header";
import HeaderContactInfo from '../header/header-contact-info';
import Content from "../common/content";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContactInfo/>
        <div className="body">
          <Header/>
          <Content/>
        </div>
      </div>
    );
  }
}

export default App;
