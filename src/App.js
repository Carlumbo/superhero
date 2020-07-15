
import React, { Component } from 'react';
import './App.css'; 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      pageNum: 1. 
    }
  }
  componentDidMount() {
    const url = 'https://reqres.in/api/users?page=${this.State.pageNum}';
    fetch(url)
    .then(response => response.json())
    .then(res => this.setState({users: res.data}))
  }
  render() {
    const { users } = this.state;

     return (
       <div>
        <p>Users List:</p>
        {users.map((user) => (
            <p key={user.id}>{user.first_name} {user.last_name} <img src={user.avatar}/></p>
              
         
        ) ) }
       </div>
  )
  }
}

export default App; 
/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    const url = "https://jsonplaceholdeer.typicode.com/posts"; 
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({posts: json}))
  }
  render() {
    return (
      <p>Hello world!</p>
    );
  }
}
export default App; 


import React from 'react';
// import logo from './logo.svg';
import logo from './logo3.png';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the Boutsy Portal!</h2>
        <p>
         Hello Team member, lets make some progress
        </p>
        <a
          className="App-link"
          href="https://boutsy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Boutsy
        </a>
      </header>
    </div>
  );
}

export default App;
*/