import React, { Component } from 'react';

import Header from '../widget/header';
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
      <FormContainer/>
      <SampleRouter/>
      </div>  
    </Grommet>
    );
  }
}
