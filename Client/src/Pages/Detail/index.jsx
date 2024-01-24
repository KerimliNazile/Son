import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Detail = () => {
  const [detail, setDetail] = useState([])
  const { id } = useParams()
  const fetchDetail = async () => {
    const res = await axios(`http://localhost:3000/nars/${id}`)
    setDetail(res.data)
  }
  useEffect(() => {
    fetchDetail()
  })
  return (
    <>
      <h1>Detail</h1>
      <div className="Detail">
        {detail ? <>
          <ul>
            <li><img src={detail.image} alt="" /></li>
            <li>{detail.text}</li>
            <li>{detail.title}</li>
          </ul>

        </> : ''}
      </div>
    </>
  )
}

export default Detail