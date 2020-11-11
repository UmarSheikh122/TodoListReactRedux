import {ADD_TODO,UPDATE_TODO,DELETE_TODO} from './actiontypes'


export const initialState=[
    {
    id:1,
    name:"One"
    },
    {
    id:2,
    name:"Two"
    },
    {
    id:3,
    name:"Three"
    }]
const reducer=(state=initialState,action)=>{
    console.log("Reducer-State",state)
    switch(action.type)
        {
            case ADD_TODO:
            let newTodoo=[...state];
            newTodoo.push(action.payload);
            return newTodoo                    
                
            case UPDATE_TODO:
            let newTodo=[...state];
            let index=newTodo.findIndex((todo)=>todo.id)
            if(index!=-1)
            {
                newTodo[index]=action.payload
            }
            console.log(index);
            return newTodo    
           
            case DELETE_TODO:
                let newTodos=[...state];
                console.log("before Filter",newTodos)
                newTodos=newTodos.filter((todo)=>todo.id !== action.payload);
                console.log("After Filter",newTodos)
                return newTodos
            default:
                return state;
        }
 
}
export default reducer;