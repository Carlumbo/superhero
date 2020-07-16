
import React, { Component } from 'react';
import './App.css'; 
import {Button} from 'react-bootstrap';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      pageNum: 1, 
    }
  }
  componentDidMount() {
    this.changePage(this.state.pageNum)
  }



  changePage(pageNum) {
    console.log(pageNum) 
    const url = `https://reqres.in/api/users?page=${pageNum}`;
    console.log(url)
    fetch(url)
    .then(res => {
      console.log(res.json);
      return res.json()
    })
    .then(res => this.setState({users: res.data, pageNum: pageNum }))

  }

  render() {
    const { users } = this.state;

     return (
       <div className="container">
          <div className="jumbotron">
                <h1 class="display-4">Users List:</h1>
              </div>
              <div className="users">
        {users.map((user) => (
          <div className="card" key={user.id}>
          <img src={user.avatar} class="card-img-top" alt={`${user.email} avatar`} />
          <div className= "card-body">
        <h5 className="card-title">{user.first_name} {user.last_name}</h5>
        <p className="card-text">{user.email}</p>
            
          </div>
        </div>   
        ) ) }
       </div>
       <Button variant="success" >Click me </Button>
       

        <div className="cbtn-group" role="group" aria-label="Basic example">
          <Button variant="primary"
            type="button" 
            disabled={this.state.pageNum === 1 ? true : false}
            className="custom-cbtn" 
            onClick={() => this.changePage(this.state.pageNum - 1)} 
            >
              Prev
            </Button>


           
          <Button variant="success"
            type="button" 
            className="custom-cbtn" 
            disabled={this.state.pageNum === this.state.pageNum ? true : false}
            >
              {this.state.pageNum}
             
            </Button>
          <Button variant="primary" 
          type="button" 

          className="custom-cbtn"
          onClick={() => this.changePage(this.state.pageNum + 1)} 
          >
            Next
            </Button>
        </div>
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