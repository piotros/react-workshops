import React from 'react';

const Header = function (props) {
  return <h1>{props.children}</h1>;
};

Header.defaultProps = {
  children: '!'
};

export default Header;
