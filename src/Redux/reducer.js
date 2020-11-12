import {ADD_TODO,UPDATE_TODO,DELETE_TODO} from './actiontypes'


export const initialState=[
   ]
const reducer=(state=initialState,action)=>{
    console.log("Reducer-State",state)
    switch(action.type)
        {
            case ADD_TODO:
            let newTodoo=[...state];
            newTodoo.push(action.payload);
            return newTodoo                    
                
            case UPDATE_TODO:
                console.log("Update Call")
            let newTodo=[...state];
            for(let i=0;i<newTodo.length;i++)
            {
                    console.log(i,' Key- ',newTodo[i] )
            }
            let index=newTodo.findIndex((todo)=>todo.id==action.payload.id)
            console.log("Yeh hai INDEX", index)
            if(index!=-1)
            {
                console.log("Yeh hai INDEX- Ander", index)

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