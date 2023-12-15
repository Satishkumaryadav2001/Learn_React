// Note Redux Main Function(5 function)

// createStore(reducer, [preloadedState], [enhancer])
// combineReducers(reducers)
// applyMiddleware(...middlewares)
// bindActionCreators(actionCreators, dispatch)
// compose(...functions)



// createStore(reducer, [preloadedState], [enhancer]) Use

import { createStore,bindActionCreators ,combineReducers} from "redux";
const ADD_TODO='add_todo';
const DEL_TODO='delete_todo';
const UPD_TODO='edit_todo';
const ADD_USER ='Add_user';

function todoReducer(state=[],action) {
    if(action.type==ADD_TODO){
        const todoText = action.payload.todoText;
        return[
            ...state,
            {text: todoText,isFinished:false,id:(state.length==0) ? 1 : state[state.length-1].id + 1}
        ]
}else if(action.type==DEL_TODO){
    const todoId=action.payload.todoId;
    return state.filter(t =>t.id !=todoId);
}else if(action.type==UPD_TODO){
    const todo=action.payload.todo;
    const todoText=action.payload.todoText;
    return state.map(t =>{
        if(t.id==todo.id){
            t.text=todoText;
        }
        return t;
    })
}
return state;
}
function userReducer(state=[],action){
if(action.type==ADD_USER){
    const userName = action.payload.userName;
    return[
        ...state,
        {userName:userName,id:(state.length==0) ? 1 : state[state.length-1].id + 1}
    ]
}
return state;
}







// const response=createStore(todoReducer,[]);

// console.log(response);

// ---outPut----

// PS C:\Users\hp\Desktop\Full Stack Web Development\React\Redux_Core> node createStore.js
// {
//   dispatch: [Function: dispatch],
//   subscribe: [Function: subscribe],
//   getState: [Function: getState],
//   replaceReducer: [Function: replaceReducer],
//   '@@observable': [Function: observable]
// }


// const {dispatch ,subscribe,getState,replaceReducer}=createStore(todoReducer,[]);

// dispatch({type:ADD_TODO,payload:{todoText:'todo 1'}});
// console.log(getState());

// dispatch({type:ADD_TODO,payload:{todoText:'todo 2'}});
// console.log(getState());

// // Delete Todo

// dispatch({type:DEL_TODO,payload:{todoId:1}});
// console.log(getState());

//subscribe 


// const {dispatch ,subscribe,getState,replaceReducer}=createStore(todoReducer,[]);
// subscribe(() =>console.log(getState()));

// dispatch(addTodo('todo 1'));
// console.log(getState());

// dispatch(addTodo('todo 2'));
// console.log(getState());

// // Delete Todo

// dispatch(deleteTodo(1));
// console.log(getState());



// Action object ->Action Method(action create)

// const addTodo=(todoText) =>({type:ADD_TODO,payload : {todoText}})
// const deleteTodo=(id)=>({type:DEL_TODO,payload:{todoId:id}})

// const {dispatch ,subscribe,getState,replaceReducer}=createStore(todoReducer,[]);
// subscribe(() =>console.log(getState()));

// dispatch(addTodo('todo 1'));
// console.log(getState());

// dispatch(addTodo('todo 2'));
// console.log(getState());

// // Delete Todo

// dispatch(deleteTodo(1));
// console.log(getState());






const addTodo=(todoText) =>({type:ADD_TODO,payload : {todoText}});
const deleteTodo=(id)=>({type:DEL_TODO,payload:{todoId:id}});
const addUser=(name)=>({type:ADD_USER,payload:{userName:name}});

const reducer =combineReducers({todo:todoReducer,user:userReducer})

const {dispatch ,subscribe,getState,replaceReducer}=createStore(reducer);
subscribe(() =>console.log(getState()));

const actions=bindActionCreators({addTodo,deleteTodo,addUser},dispatch);


actions.addTodo('todo 1');
actions.addUser('Satish');
console.log(getState());

actions.addTodo('todo 2');
console.log(getState());

// Delete Todo

dispatch(deleteTodo(1));
console.log(getState());


