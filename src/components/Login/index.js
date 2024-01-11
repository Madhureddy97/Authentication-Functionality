// Write your JS code here
import Cookies from 'js-cookie'
import {Component} from "react"

import './index.css'

class Login extends Component  {

    onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    console.log(jwtToken)
  }

    onClickingLoginButton = async () => {
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url)
    const fetchedData = await response.json()
    console.log(fetchedData)
    if (response.ok === true) {
      this.onLoginSuccess(fetchedData.jwt_token)
    }
  }

  render(){
    return (
      <div className="login-container">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickingLoginButton}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
  
}

export default Login
