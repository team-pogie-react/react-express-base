import React, { Component } from 'react';

import axios from 'axios';

export default class App extends Component {
  render() {
    return (
      <div>React simple starter</div>
    );
  }

  componentDidMount() {
    this.getUsers();
  }
 
 getUsers = () => {
    axios
        .get("https://reqres.in/api/users?page=1")
        .then(data => this.setState({ users: data.data.data }))
        .catch(err => {
            console.log(err);
            
return null;
        });
 };

}
