import React from 'react';
import ClassTest from './ClassTest'

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
      <ClassTest className="text" classes={['test1', 'test2']} color="red"/>
    </div>
  )
}