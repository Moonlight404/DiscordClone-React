import React from 'react';
import './style.css';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    }
  }
  logar(){

  }
  render(){
    return <div>
        <h1>Logar</h1>
        <button onClick={() => { this.logar() }}>Entrar</button>
    </div>
  };
}

export default AuthPage;