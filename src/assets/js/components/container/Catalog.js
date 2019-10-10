import React, { Component } from 'react';

import Header from '../widget/header';
import Catalog from '../widget/catalog';
import Footer from '../widget/footer';
import Jumbotron from '../widget/jumbotron';
import Nav from '../widget/nav';
import FormContainer from '../widget/FormContainer.jsx';
import SampleRouter from '../widget/SampleRouter';

export default class App extends Component {
  render() {
    return (
      <div >
      <Header/>
      <Nav/>
      <Jumbotron/>
      <Catalog/>
      <Footer/>
      <FormContainer/>
      <SampleRouter/>
      </div>  
    );
  }
} 
