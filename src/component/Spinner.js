
import React from 'react'
import Loader from './Loader.gif'
const Spinner=()=> {
    return (
      <div className='text-center'>
        <img src={Loader} alt='spinner'/>
      </div>
    )
  }
export default Spinner;
