import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import Loading from '../../components/Loading/Loading'
import Pagination from '../../components/Pagination/Pagination'
import SearchBar from '../../components/Search/SearchBar'
import { cleanVideogame } from '../../redux/actions'
import './videogameHome.css'

const VideogameHome = () => {
    const {videogames, loading} = useSelector(state=>state)
    const dispatch = useDispatch();
    const [orden, setOrden] = useState("");

    /* PAGINADO */
    const [currentPage, setCurrentPage] = useState(1)
    let gamePerPage = 15;
    const indexOfLastVideogame = currentPage * gamePerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - gamePerPage;
    const currentVideogame = videogames.slice(indexOfFirstVideogame, indexOfLastVideogame)
    const pagination = (pageNumber)=>setCurrentPage(pageNumber)
    
    useEffect(()=>{
        dispatch(cleanVideogame())
    },[dispatch])


    if(videogames.length === 0) return <Loading/>
    return (
        <main className='videogame-hero'>
            <div className="carousel"></div>
            <SearchBar/>
            <Dropdown setOrden={setOrden}/>
            {loading ? (<Loading/>)
                : (
                 <>
                    <div className='videogame-container'>
                        { currentVideogame.map((videogame)=>(
                            <Card key={videogame.id} videogames={videogame} />    
                        ))}
                        {/*gamePerPage, allGames, pagination,currentPage*/}
                    </div>
                    <Pagination
                     gamePerPage={gamePerPage}
                     allGames={videogames.length}
                     pagination={pagination}
                     currentPage={currentPage}
                    />
                 </>   
                )            
            }
        </main>
    )
}
export default VideogameHome