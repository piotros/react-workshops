import React from 'react';
import FormControlled from "./FormControlled"

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
      <FormControlled values={values} onSubmit={onSubmit}/>
    </div>
  )
}