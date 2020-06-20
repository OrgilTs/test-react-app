import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Hello World
        </p>

        <h1 onClick={() => alert("123")}>Hello World</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
