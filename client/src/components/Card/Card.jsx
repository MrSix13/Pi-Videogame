import React from 'react'
import './card.css'
import {useDispatch} from 'react-redux'
import { addToFavorites } from '../../redux/actions'
import { Link } from 'react-router-dom'

const Card = ({videogames}) => {
    const {name, id, rating, image, genres} = videogames;
    const dispatch = useDispatch()

    function handleFavorites(videogame){
        const {id,name} = videogame
        dispatch(addToFavorites({id,name}))
    }
    return (
            <div className='card' key={id}>
                <div className='card-rating'><span className="fa fa-star"></span>{" "}{rating}</div> 
                <Link to={`/videogame/${id}`}>
                    <img className='card-image' src={image} alt="videogameimage" />
                </Link>  
                <div className="card-info">
                    <h1 className='card-name'>{name}</h1>
                    {genres?.map((genre)=>(
                        <span key={genre} className='card-genres'>{genre}</span>
                    ))}
                    <button onClick={()=>handleFavorites(videogames)} className='card-favorite'><i className="fa fa-heart" aria-hidden="true"></i></button>
                </div>
            </div>
  )
}

export default Card