import React, { Component } from 'react';
import './App.css';
import Header from "../header/Header";
import Content from "../content/content";

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
