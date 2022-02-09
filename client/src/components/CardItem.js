import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'
import Loading from './Loading'

const CardItem = (props) => {
  // Local state to show the loading component when image was loading
  const [loading, setLoading] = React.useState(true)
  const handleOnLoaded = () => {
    setLoading(false)
  }
  return (
    <div className={`card-item ${props.class ? props.class : ''}`}>
      <Link className='card-item-link' to={props.path}>
        {loading && <Loading />}
        <figure
          className={`card-item-img-wrap ${props.class ? props.class : ''}`}
          data-category={props.label}
        >
          <img
            className={loading ? 'hidden' : 'card-item-img'}
            src={props.src}
            alt='Animal'
            onLoad={handleOnLoaded}
          />
        </figure>
        <div className='card-item-info'>
          <h5 className='card-item-text'>{props.text}</h5>
        </div>
      </Link>
    </div>
  )
}

export default CardItem
