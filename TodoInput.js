import { useState } from 'react'
import React  from 'react'
import '../App.css'

function TodoInput(props) {
    const [inputText,setinputText]=useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setinputText("")
        }
    }
  return (
    <div className='input-container'>
        <input
         type='text'
         className='input-box-todo' 
         placeholder='Enter your todo'
         value={inputText}
         onChange={e=>{
            setinputText(e.target.value)
         }}
         onKeyDown={handleEnterPress}
         />
        <button className='add-btn'
        onClick={()=>{
            props.addList(inputText)
            setinputText("")
        }}>+</button>

    </div>
  )
}

export default TodoInput