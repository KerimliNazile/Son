import React, { useEffect, useState } from 'react'
import Card from '../Card'

const Product = () => {
    const [product, setProduct] = useState([])
    async function getProduct() {
        const data = await fetch("http://localhost:3000/nars")
        const res = await data.json()
      
        setProduct(res)


    }
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <section id='Product'>

                <div className="ProductArea">
                    <div className="ProductCard">
                        {product && product.map((item) => (
                            <Card key={item._id} id={item._id} image={item.image} text={item.text} title={item.title} product={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product