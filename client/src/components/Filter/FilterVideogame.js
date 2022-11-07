import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterAbc, filterGenres, filterRating, filterCreated } from '../../redux/actions';
import './filterVideogame.css'
/*- 
[ ] Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating
*/
const FilterVideogame = ({setOrden}) => {
    const dispatch = useDispatch();
    const myGenres = useSelector((state)=>state.genres)
    
    function handleFilterByGenres(e){
        e.preventDefault();
        dispatch(filterGenres(e.target.value))
    }

    function handleFilter(e){
        e.preventDefault()
        let valor = e.target.value

        if(valor === "A-Z" || valor === "Z-A" || valor === "All"){
            dispatch(filterAbc(valor)) && setOrden(`ABC ${valor}`);
        }

        if(valor === "MAX_RATING" || valor === "MIN_RATING"){
            dispatch(filterRating(valor)) && setOrden(`ABC ${valor}`);
        }      
    }

    function handleFilterCreated(e){
        e.preventDefault();
        console.log(e.target.value)
        dispatch(filterCreated(e.target.value))
    }
  return (
    <div className='filter_container'>
            <div>
                <h4>Genre</h4>
                <select onChange={(e)=>handleFilterByGenres(e)}>
                    <option value="all">All</option>
                    {myGenres?.map(({id, name})=>(
                        <option key={id}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <h4>Sorted</h4>
                <select onChange={(e)=>handleFilter(e)}>
                    <option value="All">All</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="MAX_RATING">MAX-RATING</option>
                    <option value="MIN_RATING">MIN-RATING</option>
                </select>
            </div>
            <div>
                <h4>Storage</h4>
                <form onSubmit={(e)=>handleFilterCreated(e)}>
                    <input type="hidden" name="box1" value="0"  />
                    <input type="checkbox" name="box1" value="db"/>
                </form>
            </div>
    </div>
  )
}

export default FilterVideogame