import React, {Component} from 'react';

class FormUncontrolled extends Component {
  handleSubmit = event => {
    event.preventDefault();

    console.log(this.input.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               defaultValue="test"
               ref={input => this.input = input}/>

        <br/>

        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default FormUncontrolled;