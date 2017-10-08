import React, { Component } from 'react';
import './App.css';
import Header from "../header/header";
import Content from "../common/content";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
