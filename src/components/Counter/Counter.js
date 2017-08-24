import React, {Component} from 'react';
import Header from "../Header/Header"

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  increment = () => {
    this.setState((prevState, props) => ({counter: prevState.counter + 1}));
  }

  render() {
    return (
      <div className="counter">
        <Header children="I'm counter"/>
        <div className="counter__value">{this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  };
}

export default Counter;