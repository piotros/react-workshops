import React, {Component} from 'react';

class FormUncontrolled extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const values = {
      input: this.input.value,
      checkbox: this.checkbox.checked,
      select: this.select.options[this.select.selectedIndex].value
    }

    this.props.onSubmit(values);
  }

  render() {
    const {input, checkbox, select} = this.props.values;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               defaultValue={input}
               ref={input => this.input = input}
        />

        <br/>

        <input type="checkbox"
               defaultChecked={checkbox}
               ref={checkbox => this.checkbox = checkbox}
        />

        <br/>

        <select
          defaultValue={select}
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