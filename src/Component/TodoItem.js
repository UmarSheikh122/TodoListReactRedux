import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteTodo, updateTodo } from '../Redux/action';
function TodoItem(props) {
  console.log("InputItem-Props",props)
  let dispatch=useDispatch();
  const [editable,setEditable]=useState(false)
  const [name,setName]=useState(props.name)
  console.log("need to check - Name" ,name)

  console.log("need to check - PROPS" ,props)
  return (
        <div>
            <h3>TodoItem</h3>
       
            <div>{props.hel}</div>
            <div>{!editable ? props.name : <input type="Text" value={name} onChange={(e)=>setName(e.target.value)}/> }</div>

            {editable ? <button onClick={(e)=>{
                    dispatch(updateTodo({
                        id:props.hel,
                        name:name
                    }))

                    setEditable(!editable)
                }}>Update</button> : <button onClick={()=>setEditable(!editable)}>Edit</button>}
          
            {/* <button onClick={(e)=>{

                setEditable(!editable)
                console.log("Click Ho Gya!!!!!!!!!!!!!")
               dispatch(updateTodo({
                id:props.hel,
                name:name
            }))
           
                if(editable)
                {
                    setName(name)
                   // console.log("TodoItem After:" ,props.name)
                }
                
                
            }}> {!editable?"Edit": "Update" }</button>  */}
            <button onClick={()=>dispatch(deleteTodo(props.hel))}>Delete</button>
        
        </div>
    )
}

export default TodoItem
