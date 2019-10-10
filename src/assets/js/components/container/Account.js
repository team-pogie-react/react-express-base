import React, { Component } from 'react';

import Header from '../widget/header';
import Account from '../widget/account';
import Footer from '../widget/footer';
import Nav from '../widget/nav';
import FormContainer from '../widget/FormContainer.jsx';
import SampleRouter from '../widget/SampleRouter';

export default class App extends Component {
  render() {
    return (
    <div>  
      <Header/>
      <Nav/>
      <Account/>
      <Footer/>
      <FormContainer/>
      <SampleRouter/>
    </div>  
    );
  }
}
