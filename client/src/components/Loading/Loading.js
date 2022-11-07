import React,{useState} from 'react'
import './loading.css'

const Loading = () => {
  return (
    <div className='hero'>
        <div className="load">
          <div id="circle1" className='circle'></div>
          <div id="circle2" className='circle'></div>
          <div id="circle3" className='circle'></div>
          <p id="text">loading</p>
        </div>
        <div className="loader">
          <div className="loading">

          </div>
        </div>
    </div>
  )
}

export default Loading