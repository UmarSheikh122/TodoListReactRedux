import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Redux/action';
import {v4 as uuidv4} from 'uuid'

function TodoInput() {
    const [name,setName]=useState()
    let dispatch=useDispatch();
    return (
        <div>
            <h1>TODO Application    </h1>
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <button onClick={()=>{
                    dispatch(addTodo({
                        id:uuidv4(),
                        name:name
                    }))
                    setName('')
                }}>Add</button>
            </div>
           
        </div>
    )
}

export default TodoInput
