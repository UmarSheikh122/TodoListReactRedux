import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteTodo, updateTodo } from '../Redux/action';
function TodoItem(props) {
  console.log("InputItem-Props",props)
  let dispatch=useDispatch();
  const [editable,setEditable]=useState(false)
  const [name,setName]=useState(props.name)
  console.log("TodoItem dasdas:" ,name)

  return (
        <div>
            <h3>TodoItem</h3>
       
            <div>{props.hel}</div>
            <div>{!editable ? props.name : <input type="Text" value={name} onChange={(e)=>setName(e.target.value)}/> }</div>
            <button onClick={(e)=>{
               dispatch(updateTodo({
                id:props.hel,
                name:name
            }))
                if(editable)
                {
                    setName(name)
                   // console.log("TodoItem After:" ,props.name)
                }
                setEditable(!editable)
                
            }}> {!editable?"Edit": "Update" }</button> 
            <button onClick={()=>dispatch(deleteTodo(props.hel))}>Delete</button>
        
        </div>
    )
}

export default TodoItem
