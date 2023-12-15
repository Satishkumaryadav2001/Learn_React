// import {createStore,combineReducers} from "redux";

//Reducer imports

import todoReducer from "./slices/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

// const reducers=combineReducers({todo:todoReducer});
// const store =createStore(reducers);
const store=configureStore({
    reducer:{
        todo:todoReducer
    },
    devTools:process.env.NODE_ENV !=='production'
})

export default store;