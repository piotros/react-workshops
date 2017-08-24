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
    return (
      <div className="hide-me_content">
        {visible ? 'I\'m visible' : null}
        <Counter hide={this.hide} textVisible={this.state.visible}/>
      </div>
    )
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