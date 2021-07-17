import React, { Component } from 'react';
import './App.css';
import Greeting from './components/greeting';
import faker from 'faker';

class App extends Component { // Stateful components or Smart components
  
  constructor (props) {
    super(props);
    console.log(`constructor was set`)
    this.state = {
      names: ['Sam', 'Sammy', 'DN', 'JB', 'Dean', 'Red Reddinton'],
    };
  }

  handleClick = () => {
    let fakeName = faker.name.findName();
    let stateNames = this.state.names;
    stateNames.push(fakeName);
    this.setState({ names: stateNames });
  }

  componentDidMount() {
    console.log(`Component was successfully mounted`);
  }

  componentDidUpdate() {
    console.log(`Component was successfully Updated`);
  }

  render () {
    console.log(`Render executed`)
    const names = this.state.names;
    return (
      <div>
        <div className="App">
        {
          names.map(name => {
            return (<Greeting name={name} />)
          })
        }
        </div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );  
  }
  
}

export default App;

// props are used to sent data from parent to child