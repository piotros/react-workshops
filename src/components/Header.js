import React from 'react';
import PropTypes from 'prop-types';

const Header = function ({children, ComponentToUse, componentToUse}) {
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

  return <h1>{children}</h1>;
};

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
