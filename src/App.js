import React, { Component } from 'react';
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import Main from './Main'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
