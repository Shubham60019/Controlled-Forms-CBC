import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      username:"",
      password:""
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    let username=this.state.username
    let password=this.state.password
    console.log(username,password);
  }
  render() {
    return (
      <div>
        <form action="">
          <fieldset>
            <legend>Sign Up</legend>
            <label htmlFor="username">Username:</label>
            <input type="text" id='username' onChange={(e)=>{
              this.setState({username: e.target.value})
            }} /><br/><br />
            <label htmlFor="password">Password:</label>
            <input type="text" id='password' onChange={(e)=>{
              this.setState({password: e.target.value})
            }} /><br/><br />
            <button onClick={this.handleSubmit}>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}
