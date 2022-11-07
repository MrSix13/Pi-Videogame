import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import './navbar.css'
import { deleteFavorites } from '../../redux/actions'

const Navbar = () => {
  const dispatch = useDispatch();
  const stateFavorites = useSelector(state=>state.favorites);
  const [showMenu, setShowMenu] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleDelete = (id)=>{
    dispatch(deleteFavorites(id))
  }
  return (
    <header className='navbar-container'>

        <div className='navbar-logo'>
          <Link to="/videogames">Henry Games</Link>
        </div>
        
        <div onClick={()=>setShowFavorites(!showFavorites)} className='navbar-favorites'>
          <i className="fa fa-heart"></i>
          <span>{stateFavorites.length}</span>
          {showFavorites && 
            <div className='navbar-dropdown'>
                <h4>Favorites</h4>
                {stateFavorites?.map(({id,name})=>(
                  <div key={id} className="dropdown-box">
                  <p>{name}</p>
                  <button onClick={()=>handleDelete(id)}><i className="fa fa-trash-o dropdown-logo" aria-hidden="true"></i></button>  
                </div> 
                ))} 
            </div>
          }
        </div>
        
        <nav className={`navbar-links ${showMenu ? "showmenu" : "notshowmenu"}`}>
          <ul>
            <li><Link onClick={()=>setShowMenu(!showMenu)} to="/videogames">Home</Link></li>
            <li><Link onClick={()=>setShowMenu(!showMenu)} to="/create">Create Videogame</Link></li>
          </ul>
        </nav>

        <button className='navbar-button' onClick={()=>setShowMenu(!showMenu)}>
          {showMenu ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
        </button>

    </header>
  )
}

export default Navbar