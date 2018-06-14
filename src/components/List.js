import React from 'react';

const List = (props) => {
  const elements = props.list.map(element => <li key={element.id} id={element.id}> {element.text} <button onClick={() => props.remove(element.id)}>Remove</button></li>)

  return (
    <ul>{elements}</ul>
  )
}

export default List;