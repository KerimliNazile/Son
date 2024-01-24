import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'

const Card = ({ image, title, text, id, product }) => {
    const {addBasket } = useContext(BasketContext)
    return (
        <>
            <div className="CardArea">
                <div className="ImageCard">
                    <img src={image} alt="" />
                </div>
                <div className="TitleCard">
                    <h1>{title}</h1>
                </div>
                <div className="TextCard">
                    <p>{text}</p>
                </div>
                <div className="Iconn">
                    <Link to={`/${id}`}>  <i class="fa-solid fa-eye"></i></Link>
                    <button onClick={() => addBasket(product)}><i class="fa-solid fa-basket-shopping"></i></button>
                </div>
            </div>

        </>
    )
}

export default Card