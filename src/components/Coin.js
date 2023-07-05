import React from 'react'
import "./Coin.css"

const Coin = ({name,symbol,icon,price}) => {
  return (
    <div className='coin-container' >
        <h2>{name}</h2>
        <img src={icon} alt="" />
        <h3>Price: {price} $</h3>
        <h3>{symbol}</h3>
        <button>Buy {name}</button>
    </div>
  )
}

export default Coin