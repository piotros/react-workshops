import React from 'react';
import Header from './Header';

export default function App(props) {
  return (
    <div>
      <Header title="Dupa 1" {...props}/>
      <Header {...props} title="Dupa 2"/>
      <Header>Props children</Header>
    </div>
  )
}