import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.userLogin = this.userLogin.bind(this)
  }

  userLogin(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.login({username, password})
  }

  render() {
    return (
      <div>
        <input ref='username' />
        <input ref='password' />
        <button onClick={this.userLogin}>登录</button>
      </div>
    )
  }
}