import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogame, switchLoading } from '../../redux/actions';
import './searchbar.css'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [game, setGame] = useState('');

  const handleKeyGame = (e)=>{
    if(e.key === 'Enter'){
      dispatch(switchLoading())
      dispatch(searchVideogame(game))
    }
  }

  return (
    <div className='search-container'>
        <input onKeyDown={handleKeyGame} value={game}  type="text" onChange={(e)=>setGame(e.target.value)} placeholder='Search Game...' />
        <button className='search-button'><i className="fa fa-search"></i></button>
    </div>
  )
}

export default SearchBar