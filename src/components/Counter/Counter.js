import React, {Component} from 'react';
import Header from "../Header/Header"

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.counter !== nextState.counter;
  }

  componentDidUpdate() {
    if (this.state.counter === 3) {
      this.props.hide();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({counter: nextProps.counter});
  }

  increment = () => {
    this.setState((prevState, props) => ({counter: prevState.counter + 1}));
  }

  render() {
    console.log('render counter');
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