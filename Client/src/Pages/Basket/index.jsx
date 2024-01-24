import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {

  const {basket, deleteBasket, increaseBasket, decreaseBasket } = useContext(BasketContext)
  return (
    <>
      <h1>Basket</h1>
      <div className="Basket">
        {basket && basket.map((item) => (
        <ul>
          <li><img src={item.image} alt="" /></li>
          <li>{item.text}</li>
          <li>{item.title}</li>
          <li><button onClick={() => deleteBasket(item)}>Delete</button></li>
          <li><button onClick={() => increaseBasket(item)}>+</button></li>
          <p>{item.count}</p>

          <li><button onClick={() => decreaseBasket(item)}>-</button></li>
        </ul>
        )


        )}
      </div>
    </>
  )
}

export default Basket