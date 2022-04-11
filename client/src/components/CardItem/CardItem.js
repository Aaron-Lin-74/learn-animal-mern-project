import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'
import Loading from '../Loading/Loading'

function CardItem({ className, path, label, src, text }) {
  // Local state to show the loading component when image was loading
  const [loading, setLoading] = React.useState(true)
  const handleOnLoaded = () => {
    setLoading(false)
  }
  return (
    <div className={`card-item ${className || ''}`}>
      <Link className='card-item-link' to={path}>
        {loading && <Loading />}
        <figure
          className={`card-item-img-wrap ${className || ''}`}
          data-category={label}
        >
          <img
            className={loading ? 'hidden' : 'card-item-img'}
            src={src}
            alt={text}
            onLoad={handleOnLoaded}
          />
        </figure>
        <div className='card-item-info'>
          <h3 className='card-item-text'>{text}</h3>
        </div>
      </Link>
    </div>
  )
}

export default CardItem
