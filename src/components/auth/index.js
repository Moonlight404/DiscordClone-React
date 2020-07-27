import React from 'react';
import './style.css';
import AuthPage from '../AuthPage';
import Dashboard from '../app/Dashboard/home'


class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true
    }
  }
  render(){
    return <div className="mounted">
    { !this.state.logged && <AuthPage></AuthPage> }
    { this.state.logged && <Dashboard></Dashboard>  }
    </div>
  };
}

export default Auth;