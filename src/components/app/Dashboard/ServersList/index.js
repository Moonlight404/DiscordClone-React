import React from 'react';
import './style.css';
import ServerButton from './serverButton';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverButton: []
    }
  }
  render(){
    return <div className="serverList">
        <ServerButton isHome serverName="Ínicio" notification="20"></ServerButton>
        <ServerButton serverName="Code Building" notification="10"></ServerButton>
        <ServerButton serverName="NekoApp" notification="0"></ServerButton>
        <ServerButton serverName="Kaway Servers" notification="120"></ServerButton>
    </div>
  };
}

export default Home;