import React from 'react';
import ClassTest from './ClassTest'

export default function App(props) {
  return (
    <div>
      <ClassTest className="text" classes={['test1', 'test2']} color="red"/>
    </div>
  )
}