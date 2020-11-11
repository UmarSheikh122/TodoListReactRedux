import {ADD_TODO,DELETE_TODO,UPDATE_TODO} from './actiontypes'

export const addTodo=(data)=>{
    return{
        type:ADD_TODO,
        payload:data
    }
}

export const deleteTodo=(todoId)=>
{
    console.log("todoId to be deleted",todoId)
    return{
        type:DELETE_TODO,
        payload:todoId
    }
}
export const updateTodo=(data)=>{
    return{
        type:UPDATE_TODO,
        payload:data
    }
}