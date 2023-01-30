import React from 'react'

export default function User(props) {
  return (
    <div>
      <h1>{props.data.name} {props.data.age} {props.data.city}</h1>
      <img src={props.data.avatar}/>
   
    </div>
  )
}


