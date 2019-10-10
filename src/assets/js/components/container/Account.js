import React, { Component } from 'react';

import Header from '../widget/header';
import Account from '../widget/account';
import Footer from '../widget/footer';
import Nav from '../widget/nav';
import FormContainer from '../widget/FormContainer.jsx';
import SampleRouter from '../widget/SampleRouter';
import jcw from '../style/jcw.style';
import { Grommet } from 'grommet';

export default class App extends Component {
  render() {
    return (
    <Grommet theme={jcw} >
      <div >
      <Header/>
      <Nav/>
      <Account/>
      <Footer/>
      <FormContainer/>
      <SampleRouter/>
      </div>  
    </Grommet>
    );
  }
}
