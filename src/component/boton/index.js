import React from 'react'

export const Boton = (props) => {
  const { text, touch } = props
  return <button onClick={touch}> {text}</button>
}
