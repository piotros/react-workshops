import React from 'react';
import Header from './Header/Header';
import Uppercase from './Uppercase';

export default function App(props) {
  return (
    <div>
      <Header title="Dupa 1" {...props}/>
      <Header {...props} title="Dupa 2"/>
      <Header>Props children</Header>
      <Header children={<Uppercase text="uppercase me 1"/>}/>
      <Header componentToUse={Uppercase}>uppercase me 2</Header>
      <Header componentToUse={Uppercase} children="uppercase me 3"/>
      <Header ComponentToUse={Uppercase}>uppercase me 4</Header>
      <Header ComponentToUse={Uppercase} children="uppercase me 5"/>
      <Header children={3}/>
    </div>
  )
}