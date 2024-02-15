import React from 'react'
import cards from '../data/data'

const Card = () => {
  return (
    <div className='card-container'>
      {
        cards.map(item => {
           return  <div key={item.id} className='card'>
                <h2 className='card-title'>{item.title}</h2>
                <p className='card-description'>{item.descr}</p>
            </div>
        })
      }
    </div>
  )
}

export default Card