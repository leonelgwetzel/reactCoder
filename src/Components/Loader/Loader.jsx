import React from 'react'
import { Waveform } from '@uiball/loaders'


const Loader = () => {
  return (
    <>
    <div className='d-flex justify-content-center mt-5'>
    <Waveform 
 size={40}
 lineWeight={3.5}
 speed={1} 
 color="black" 
/>
    </div>
    </>
  )
}

export default Loader