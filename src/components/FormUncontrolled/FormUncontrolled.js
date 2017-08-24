import React, {Component} from 'react';

class FormUncontrolled extends Component {
  handleSubmit = event => {
    event.preventDefault();

    console.log(this.input.value);
    console.log(this.checkbox.checked);
    console.log(this.select.options[this.select.selectedIndex].value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               defaultValue="test"
               ref={input => this.input = input}
        />

        <br/>

        <input type="checkbox"
               defaultValue={false}
               ref={checkbox => this.checkbox = checkbox}
        />

        <br/>

        <select
          defaultValue="one"
          ref={select => this.select = select}
        >
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>

        <br/>

        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default FormUncontrolled;