import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import  correct from '../sounds/correct.mp3'
import  wrong  from '../sounds/wrong.mp3'
import useSound from 'use-sound'


const Trivria = ({data,setTime,setItemnum,itemnum,setIsRunning}) => {
  const[question, setQuestion] = useState(null)
  const [selectedans ,setsSelectedans] = useState(null)
  const [classname ,setClassname] = useState("answer")

  
  const [corrects] = useSound(correct)
  const [wrongs] = useSound(wrong)


  useEffect(()=>{
    setQuestion(data[itemnum-1])
  },[data,itemnum])

  const handleClick=(item)=>{
    setIsRunning(false)
    setsSelectedans(item)
    setClassname( "answer active" );
    setTimeout(() => {
      setClassname(item.correct?"answer correct":"answer wrong")
      
    },3000);
    setTimeout(() => {
     if(item.correct)
     {
      corrects()
      setTimeout(() => {
        setItemnum(itemnum+1)
        setsSelectedans(null)
      },4000);
     }
     else{
      wrongs()
       setTimeout(() => {
         setTime(true)
       }, 4000);
      
     }
    }, 5000);

   
  }
  return (
    
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">=
      {question?.answer.map((item)=>{
       return (
        <>
        
            <div className={selectedans===item?classname:"answer"} onClick={()=>handleClick(item)}>{item.text}</div>
          
        
         </>)
      })}
        
    </div>
    </div>
  )
}

export default Trivria