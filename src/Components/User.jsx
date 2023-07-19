import React from 'react'
import { useRef } from 'react'
import play from '../sounds/play.mp3'
import useSound from 'use-sound'

const User = ({setUsername,level,setLevel}) => {
    const [plays] = useSound(play)
    const inputref=useRef()
    const handleclick=()=>{
      if (inputref.current.value) {
        plays()
        setTimeout(() => {
          setUsername(inputref.current.value)
          
        }, 3000);
        
      }
} 

const handleLevelChange = (event) => {
  setLevel(event.target.value)
}
          
  return (
    <>
    <div className="start">
        <input  placeholder='enter your name ' className='startinput' ref={inputref} />
        <div className="radio-group">
          <p>Level:</p>
          <label className="radio">
            <input
              type="radio"
              value="easy"
              checked={level === 'easy'}
              onChange={handleLevelChange}
            />
            <span className="radio-label">Easy</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              value="hard"
              checked={level === 'hard'}
              onChange={handleLevelChange}
            />
            <span className="radio-label">Hard</span>
          </label>
        </div>

        <button className='startbtn'  onClick={handleclick}>play</button>
         

    </div>
    </>
  )
}

export default User