import React from 'react'

const Item = ({ item }) => {
  return (
    <>
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <img src={item.image} alt={item.name}/>
    </>
  )
}

export default Item