import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  state = { username:'Rahul' } usernamechange = (event) =>{ this.setState({username:event.target.value}) } render(){ return( <div> <UserInput change = {this.usernamechange} currentName = {this.state.username} /> <UserOutput name ={this.state.username}/> <UserOutput name ={this.state.username} /> </div> ) }
  );
}

export default App;
