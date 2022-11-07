import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameById } from '../../redux/actions';
import './videogamedetail.css'
import Loading from '../../components/Loading/Loading';

const VideogameDetail = () => {
  const dispatch = useDispatch()
  const {name,description, image, genres,platforms,rating} = useSelector(state=>state.videogame)
  const {id} = useParams()
  const released = platforms?.map(({released_at})=>released_at)[0]
  useEffect(()=>{
    dispatch(getVideogameById(id))
  },[id,dispatch])
  if(!image) return <Loading/>
  return (
      <div className='game-container'>
      <div className="game-image">
        <img src={image} alt='imagen juego'/>
        <div className="game-rating">
          {rating}
        </div>
      </div>
      <div className="game-info">
        <h2>{name}</h2>
        <div className="genre-span">
          {genres?.map((genre)=>(
            <span key={genre}>{genre}{' '}</span>
          ))}
        </div>
        <p><strong>Released: </strong>{released}</p>
        <p>{description}</p>
      </div>
      <div className="game-platforms">
        {platforms?.map(({name})=>(
          <span key={name}>{name}</span>
        ))}
      </div>
    </div>
  )
}

export default VideogameDetail