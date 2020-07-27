import React from 'react';
import './home.css';
import ServerList from './ServersList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  render(){
    return <div>
        <ServerList></ServerList>
    </div>
  };
}

export default Home;