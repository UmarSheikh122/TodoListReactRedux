import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'
function TodoList() {
    const todos=useSelector(state => state)
    console.log("Input-List Todods",todos);
    return (    
        <div>
            {/* <h1>TodoList</h1> */}
            {todos.map(todo=>
            {
                return <TodoItem key={todo.id} hel={todo.id} name={todo.name}/>
            })}

        </div>
    )
}


export default TodoList
