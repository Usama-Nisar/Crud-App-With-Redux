

import React from 'react'

const iState = {
    todo : []
}

const todoReducer = (state=iState, action) => {
     const {type,payload} = action
    switch(type){
        case "ADD_TODO":
            return{
                todo:[
                    ...state.todo,
                    payload
                ]
            }
        case "DELETE_TODO":
            const newTodo = state.todo.filter((data) => data.id !== payload)
            return{
                ...state,
                todo : newTodo
            }
        case "EDIT_TODO":
            const currEle = state.todo.map((res) => res.id === payload.id ? payload : res) 
            return {
                ...state,
                todo: currEle
            }

        
        default:
            return state
    }
  
}

export default todoReducer