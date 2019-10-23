import React,  { useState, Component } from "react";

export default class Planets extends Component {
    state = {
      hasErrors: false,
      planets: {}
    };
    
    componentDidMount() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin', 'http://localhost:3001/api/accounts');
      fetch({
        mode: 'cors',
        method: 'GET',
        headers: headers
    })
        .then(res => res.json())
        .then(res => {this.setState({ planets: res}); console.log(res)})
        .catch(() => this.setState({ hasErrors: true }));
    }
  
    render() {
      return <div>{JSON.stringify(this.state.planets)}</div>;
    }
  }