import React, { Component } from 'react';

import Header from '../widget/header';
import Brands from '../widget/brands';
import Footer from '../widget/footer';
import Nav from '../widget/nav';
import FormContainer from '../widget/FormContainer.jsx';
import SampleRouter from '../widget/SampleRouter';

export default class App extends Component {
  render() {
    return (
      <div >
      <Header/>
      <Nav/>
      <Brands/>
      <Footer/>
      <FormContainer/>
      <SampleRouter/>
      </div>  
    );
  }
}
