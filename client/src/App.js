import './App.css';
import { useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getAllVideogames, getAllGenres} from './redux/actions'
import VideogameHome from './pages/VideogameHome/VideogameHome';
import LandingPage from './pages/Home/LandingPage';
import Navbar from './components/Navbar/Navbar';
import CreateVideogame from './pages/Form/CreateVideogame';
import VideogameDetail from './pages/VideogameDetails/VideogameDetail';
import Loading from './components/Loading/Loading';

function App() {
  const dispatch = useDispatch()
   useEffect(()=>{
      dispatch(getAllVideogames())
      dispatch(getAllGenres())
   },[dispatch])

  return (
    <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path="/"><Loading/></Route>
          <Route path="/videogames"><VideogameHome/></Route>
          <Route path="/videogame/:id"><VideogameDetail/></Route>
          <Route path="/create"><CreateVideogame/></Route>
          {/*Crear ruta 404 not found */}
      </Switch>
    </div>
  );
}

export default App;
