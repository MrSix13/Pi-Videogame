import React,{useState} from 'react'
import FormInput from '../../components/FormInput/FormInput'
import './createvideogame.css'
import {useSelector, useDispatch} from 'react-redux';
import { inputs, platforms } from './utils';
import { setVideogame } from '../../redux/actions';

const CreateVideogame = () => {
  const dispatch = useDispatch();
  const myGenres = useSelector((state)=>state.genres)
  const [values, setValues] = useState({
    name: "",
    description: "",
    rating: "",
    released: "",
    image: "",
    genres:[],
    platforms: []
  })
  const handleSubmit = (e)=>{
    e.preventDefault();
    //llamar al dispatch con la funcion => createGame(values)
    console.log(values)
    dispatch(setVideogame(values))
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleGenres = (e)=>{
    setValues({...values,genres:[...values.genres, e.target.value]})
  }

  const handlePlatforms = (e)=>{
    setValues({...values,platforms:[...values.platforms, e.target.value]})
  }

  const handleDeleteGenres = (props)=>{
    setValues({
      ...values,
      genres:values.genres.filter((genre)=>genre !== props)
    })
  }

  const handleDeletePlatforms = (props)=>{
    setValues({
      ...values,
      platforms: values.platforms.filter((platform)=>platform !== props)
    })
  }
  return (
    <div className='create-container'>
        <form onSubmit={handleSubmit}>
          <h1>Create Videogame</h1>
          <h5>Create your own videogame</h5>
          {inputs.map((input)=>(
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              className="form-input"
            />
          ))}
          <div className='multiple-select'>
            <select name="" onChange={(e)=>handleGenres(e)}>
              <option>Genres</option>
              {myGenres?.map(({name})=>(
                <option key={name + 6} value={name}>{name}</option>
              ))}
            </select>
              <div className='genre-box'>
                {values.genres?.map((genre)=>(
                  <div key={genre}>
                    
                      <div className="platforms-box"><strong>{genre}</strong></div>
                      <button onClick={()=>handleDeleteGenres(genre)}>
                        <i className="fa fa-times-circle-o" value={genre}></i>
                      </button>
                    
                  </div>
                ))}
              </div>
          </div>
          <div className='multiple-select'>
            <select name="" onChange={(e)=>handlePlatforms(e)}>
              <option>Platforms</option>
              {platforms?.map((platform)=>(
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
              <div className='genre-box'>
                {values.platforms?.map((platform)=>(
                  <div key={platform}>
                    <div className='platforms-box'><strong>{platform}</strong></div>
                    <button onClick={()=>handleDeletePlatforms(platform)}>
                      <i className="fa fa-times-circle-o" value={platform}></i>
                    </button>
                  </div>
                ))}
              </div>
          </div>
          <button className='submit-button' >Create</button>
        </form>
    </div>
  )
}
export default CreateVideogame