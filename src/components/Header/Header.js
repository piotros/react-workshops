import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';
import icon from './react.png';

class Header extends React.Component {
  render() {
    console.log('render');
    const {children, ComponentToUse, componentToUse} = this.props;

    if (componentToUse) {
      return (
        <h1>{React.createElement(componentToUse, {text: children})}</h1>
      )
    }

    if (ComponentToUse) {
      return (
        <h1><ComponentToUse text={children}/></h1>
      )
    }

    return (
      <h1 className="header">
        <img src={icon} alt="React logo"/>
        {children}
      </h1>
    )
  }
}

Header.defaultProps = {
  children: '!'
};

Header.propTypes = {
  children: PropTypes.string,
  componentToUse: PropTypes.func,
  ComponentToUse: PropTypes.func
  // ComponentToUse: PropTypes.instanceOf(Uppercase) // instance of Uppercase component
};

export default Header;
