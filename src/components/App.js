import React from 'react';
import FormUncontrolled from "./FormUncontrolled"

export default function App(props) {
  const values = {
    input: 'dupa',
    checkbox: true,
    select: 'three'
  }

  const onSubmit = values => {
    console.log(values);
  }

  return (
    <div>
      <FormUncontrolled values={values} onSubmit={onSubmit}/>
    </div>
  )
}