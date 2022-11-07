import React,{useState} from 'react'
import FilterVideogame from '../Filter/FilterVideogame';
import './dropdown.css'

const Dropdown = ({setOrden}) => {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className='dropdown-container'>
        <button className='dropdown-button' onClick={(e)=>setIsActive(!isActive)}>
            <i className="fa fa-filter"></i>
        </button>

        {isActive && (
            <div className='dropdown_div'>
                <FilterVideogame setOrden={setOrden}/>
            </div>
        )}

    </div>
  )
}

export default Dropdown