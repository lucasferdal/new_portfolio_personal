import React from 'react'

const Card = ({image, title, text, badge}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="card-image"><img className="object-cover h-48 w-96" src={image} alt="Shoes" /></figure>
      <div className="card-body" style={{minHeight: '14rem'}}>
        <h2 className="card-title">
          <p>{title}</p>
        </h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{badge}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;