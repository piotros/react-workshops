import React, {Component} from 'react';

import Counter from "../Counter/Counter"

class HideMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    }
  }

  getContent({visible}) {
    if (visible) {
      return (
        <div className="hide-me_content">
          I'm visible
          <Counter/>
        </div>
      )
    } else {
      return (
        <div className="hide-me_content">
          <Counter/>
        </div>
      )
    }
  }

  hide = () => {
    this.setState({visible: false});
  }

  render() {
    return (
      <div className="hide-me">
        {this.getContent(this.state)}
        <button onClick={this.hide}>Hide</button>
      </div>
    )
  }
}

export default HideMe;